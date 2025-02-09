import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../R";

/**  
 * 2カラムのグリッドレイアウト  
 * ・grid-template-columns: repeat(2, 1fr) により2列表示  
 * ・gap によりアイテム間に隙間を設定  
 */
const GalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

/**
 * グリッドの各アイテム。  
 * props.wide が true の場合は grid-column: span 2; で2列分を横断
 */
interface GalleryItemProps {
  wide?: boolean;
}
const GalleryItem = styled.div<GalleryItemProps>`
  grid-column: ${(props) => (props.wide ? "span 2" : "auto")};
`;

/**
 * 画像のスタイル  
 * ・width: 100% で横幅を統一、height: auto でアスペクト比を維持  
 * ・border-radius で角丸、border に rgba(0, 0, 0, 0.1) で10%の黒を表現  
 * ・hover時に少し拡大するエフェクトも追加
 */
const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

/**
 * （任意）画像のタイトルを下部に表示するためのキャプション
 */
const Caption = styled.div`
  margin-top: 4px;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);

  a {
    color: ${Color.accent};
    text-decoration: underline;
  }
`;

/**
 * クリック時に表示するオーバーレイ（モーダル）用コンポーネント
 */
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

/**
 * モーダル内の拡大画像。画面に収まるように最大サイズを指定
 */
const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

// 入力データの型定義
export type ImageData = {
  title?: React.ReactNode;
  url: string;
  width: 1 | 2;
};

interface ImageGalleryProps {
  images: ImageData[];
}

/**
 * ImageGallery コンポーネント
 *
 * ・images 配列（{ title?: string, url: string, width: 1|2 }）を受け取り、  
 *   CSS Grid を用いて画像を表示する。  
 * ・width が 1 の場合は通常のグリッドアイテムとして配置、  
 *   width が 2 の場合は grid-column: span 2; で2列を横断して表示。  
 * ・画像クリックでオーバーレイが表示され、拡大画像を確認できる。
 */
export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  // 選択中の画像URL（null の場合はオーバーレイ非表示）
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GalleryContainer>
        {images.map((image, index) => (
          <GalleryItem key={index} wide={image.width === 2}>
            <GalleryImage
              src={image.url}
              alt={`Gallery image ${index}`}
              onClick={() => handleImageClick(image.url)}
            />
            {image.title && <Caption>{image.title}</Caption>}
          </GalleryItem>
        ))}
      </GalleryContainer>

      {/* 選択された画像があればオーバーレイで拡大表示 */}
      {selectedImage && (
        <Overlay onClick={handleOverlayClick}>
          <ModalImage src={selectedImage} alt="Enlarged view" />
        </Overlay>
      )}
    </>
  );
};
