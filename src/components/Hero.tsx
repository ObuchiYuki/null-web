import HeroContent from "@/assets/hero.png";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HeroImage = styled.img`
  object-fit: contain;
  height: 300px;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={HeroContent} alt="Hero" />
      <p>Streamer & Illustrator & Vtuber & Alien</p>
    </HeroContainer>
  );
}