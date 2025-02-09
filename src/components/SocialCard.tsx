import styled from "styled-components";
import { Color } from "../R";
import NotationBackgroundImage from "@/assets/notation.png";

const SocialCardContainerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const NotationBackground = styled.div`
  background: url(${NotationBackgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 150px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const SocialCardContainer = styled.div<{ reverse: boolean, isPreparing: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  gap: 8px;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row' };
  text-align: ${({ reverse }) => reverse ? 'right' : 'left' };
  opacity: ${({ isPreparing }) => isPreparing ? 0.2 : 1 };
`;  

const SocialIcon = styled.img`
  width: 38px;
  height: 38px;
`;

const SocialIconTitle = styled.p`
  font-size: 12px;
`;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  gap: 4px;
  width: 64px;
  min-width: 64px;
`;

const SocialDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SocialLink = styled.a`
  color: ${Color.accent};
  text-decoration: underline;
`;

const SocialDescription = styled.p`
  font-size: 14px;
  color: ${Color.secondaryLabel};

  a {
    color: ${Color.accent};
    text-decoration: underline;
  }
`;

export const SocialCard = ({
  title,
  description,
  account,
  link,
  image,
  reverse,
  isPreparing,
}: {
  title: string;
  description: React.ReactNode;
  account: string;
  link: string;
  image: string;
  reverse?: boolean;
  isPreparing?: boolean;
}) => {
  return (
    <SocialCardContainerContainer>
      {
        isPreparing && <NotationBackground>
          準備中!
        </NotationBackground>
      }
      <SocialCardContainer reverse={reverse ?? false} isPreparing={isPreparing ?? false}>
        <SocialIconContainer>
          <SocialIcon src={image} alt={title} />
          <SocialIconTitle>{title}</SocialIconTitle>
        </SocialIconContainer>
        <SocialDescriptionContainer>
          <SocialLink href={link} target="_blank" rel="noreferrer noopener">
            {account}
          </SocialLink>
          <SocialDescription>{description}</SocialDescription>
        </SocialDescriptionContainer>
      </SocialCardContainer>
    </SocialCardContainerContainer>
  )
}