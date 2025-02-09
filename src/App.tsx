import styled from "styled-components"
import { Hero } from "./components/Hero"
import { Header } from "./components/Header"
import { SocialSection } from "./sections/SocialSection"
import { GallerySection } from "./sections/GallerySection"

const _PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  padding-top: 0;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`

const _Page = styled.div`
  background: var(--system-background);
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const _Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  padding-top: 0;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 12px;
  }
`

const _SectionTitle = styled.h2`
  text-align: center;
  font-size: 24px;
`

export const App = () => {
  return (
    <_PageContainer>
      <Header/>
      <_Page>
        <_Container>
          <Hero/>

          <_SectionTitle>Socials</_SectionTitle>
          <SocialSection/>

          <_SectionTitle>Works</_SectionTitle>
          <GallerySection/>

          <_SectionTitle>Activity</_SectionTitle>

          <_SectionTitle>Contact</_SectionTitle>

        </_Container>  
      </_Page>
    </_PageContainer>
  )
}
