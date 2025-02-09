import { ImageGallery } from "../components/ImageGallery"
import Gallery1 from "@/assets/gallery/01.gif"
import Gallery2 from "@/assets/gallery/02.gif"
import Gallery3 from "@/assets/gallery/03.png"
import Gallery4 from "@/assets/gallery/04.gif"
import Gallery5 from "@/assets/gallery/05.jpeg"
import Gallery6 from "@/assets/gallery/06.jpeg"
import Gallery7 from "@/assets/gallery/07.webp"

export const GallerySection = () => {
  return (
    <ImageGallery images={[
      {
        url: Gallery1,
        width: 1,
        title: "Youtubeショート用 - オリジナルアニメーション"
      },
      {
        url: Gallery2,
        width: 1,
        title: "Youtubeショート用 - オリジナルアニメーション"
      },
      {
        url: Gallery3,
        width: 1,
        title: (
          <>
            <a href="https://www.caloriai.com" target="_blank" rel="noreferrer noopener">ダイエットアプリ「カロリAI」</a>（株式会社AZStudio様）
            <br/>
            広告用素材の依頼で作成
          </>
        )
      },
      {
        url: Gallery4,
        width: 1,
        title: (
          <>
          <a href="https://www.youtube.com/watch?v=7xT4rdIHDm4" target="_blank" rel="noreferrer noopener">のっきさん：テトリス / 柊マグネタイト</a>
          <br/>
          歌ってみた動画用アニメーション
          </>
        )
      },
      {
        url: Gallery5,
        width: 1,
        title: "リスナーさんからのご依頼で描いたSNS用アイコン"
      },
      {
        url: Gallery6,
        width: 1,
        title: "リスナーさんからのご依頼で描いたSNS用アイコン"
      },
      {
        url: Gallery7,
        width: 2,
        title: "なんでも描く配信 - Twitchでリクエスト全て描きます！という企画をしてリスナーさんからのリクエストを全部描きました"
      },
    ]}/>
  )
}