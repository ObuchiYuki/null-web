import styled from "styled-components"

import { SocialCard } from "../components/SocialCard"

import TwitchIcon from "@/assets/twitch.png"
import YoutubeIcon from "@/assets/youtube.png"
import TwitterIcon from "@/assets/twitter.png"
import BilibiliIcon from "@/assets/bilibili.png"
import FanboxIcon from "@/assets/fanbox.png"
import TiktokIcon from "@/assets/tiktok.png"

const SocialSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  justify-content: flex-start;
`

export const SocialSection = () => {
  return (
    <SocialSectionContainer>
      <SocialCard
          title="Twitch"
          description="生放送はここ！不定期でお絵描き配信やゲーム配信をしています。"
          account="@alien_null"
          link="https://www.twitch.tv/alien_null"
          image={TwitchIcon}
        />

        <SocialCard
          title="Youtube"
          description="手描きアニメや歌ってみた、切り抜きなど、ショート動画をメインに投稿中！今の目標:収益化"
          account="@Alien_Null"
          link="https://www.youtube.com/@Alien_Null"
          image={YoutubeIcon}
        />

        <SocialCard
          title="Twitter"
          description={
            <>
              作業途中の絵を載せたり、ファンと交流したりゆるく使ってます！下記ハッシュタグをつけてもらえたら嬉しいです！
              ファンアートタグ: <a href="https://x.com/search?q=%23ぬるあ〜と" target="_blank" rel="noreferrer noopener">#ぬるあ〜と</a>・
              その他動画の感想など: <a href="https://x.com/search?q=%23宇宙人調査報告" target="_blank" rel="noreferrer noopener">#宇宙人調査報告</a>
            </>
          }
          account="@asu5m843B"
          link="https://x.com/asu5m843B"
          image={TwitterIcon}
        />

        {/* <SocialCard
          title="Bilibili"
          description="Exercitation nostrud dolor cupidatat culpa proident ex ipsum ex reprehenderit aute sunt sed amet quis."
          account="@null"
          link="https://twitter.com/kurokawa"
          image={BilibiliIcon}
        /> */}

        <SocialCard
          title="Fanbox"
          description="クリエイター支援サイトです。YouTubeで投稿した動画で使用したイラスト素材のほぼ全てが閲覧、保存できます！使用も自由です！"
          account="@artnull"
          link="https://artnull.fanbox.cc"
          image={FanboxIcon}
        />

        <SocialCard
          title="Tiktok"
          description="活動準備中です！"
          account="@xxxx"
          link="https://twitter.com/kurokawa"
          image={TiktokIcon}
          isPreparing
        />
      </SocialSectionContainer>
  )
}