/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Grid, Flex } from "theme-ui";
import styles from "../styles/utility.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import {
  Overline,
  Heading2,
  Heading3,
  Heading6,
} from "../components/typography";

const News = ({ date, title, url, mt }) => (
  <Flex sx={{ mt: mt }}>
    <Box
      sx={{
        width: "160px",
        fontSize: [3, 4, 5],
        lineHeight: ["20px", "20px", "24px"],
      }}
    >
      {date}
    </Box>
    <Box
      sx={{
        flex: 1,
        fontSize: [3, 4, 5],
        lineHeight: ["20px", "20px", "24px"],
        "& a": {
          textDecoration: "none",
          color: "black",
        },
        "& a:hover": {
          color: "primary",
        },
      }}
    >
      <Link href={url}>
        <a>{title}</a>
      </Link>
    </Box>
  </Flex>
);

const CompanyInfo = ({ url, title }) => (
  <Box
    sx={{
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: "separator",
      pt: 7,
      "& a": {
        textDecoration: "none",
        color: "black",
        fontSize: [4, 5, 6],
      },
      "& a:hover": {
        color: "primary",
      },
    }}
  >
    <Link href={url}>
      <a>{title}</a>
    </Link>
  </Box>
);

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Image
          src="/images/visual_main_catch.svg"
          alt="Learning is more Fun and more Free"
          width={920}
          height={348}
          priority={true}
        />
        <Overline sx={{ mt: 11 }}>MISSION</Overline>
        <Heading2>学ぶ喜びをすべての人へ</Heading2>
        <Box
          sx={{
            fontSize: [5, 6, 7],
            lineHeight: ["28px", "32px", "40px"],
            mt: 4,
          }}
        >
          学びとは本来、もっと自由で、楽しいものです。私たちは、学ぶきっかけをつくり、学びに寄り添うプラットフォームをつくります。
        </Box>
        <Box sx={{ mt: 6 }}>
          <Link href="/company">
            <a className={styles.button3}>詳しくみる</a>
          </Link>
        </Box>
        <Overline sx={{ mt: 11 }}>SERVICE</Overline>
        <Heading3>主なサービス</Heading3>
        <Grid gap={10} columns={[1, 2]} sx={{ mt: 9 }}>
          <Box>
            <Image
              src="/images/logo_studyplus.svg"
              alt="Studyplus"
              width={440}
              height={56}
            />
            <Box sx={{ mt: 10 }}>
              <Image
                src="/images/image_studyplus.png"
                alt="Studyplus"
                width={440}
                height={227}
              />
            </Box>
            <Heading6 sx={{ mt: 10, textAlign: "center" }}>
              毎日の勉強を習慣にできない悩みを解決
            </Heading6>
            <Box sx={{ mt: 6, textAlign: "center" }}>
              <Link href="/service">
                <a className={styles.button3}>詳しくみる</a>
              </Link>
            </Box>
          </Box>
          <Box>
            <Image
              src="/images/logo_studyplus_for_school.svg"
              alt="Studyplus for School"
              width={440}
              height={56}
            />
            <Box sx={{ mt: 10 }}>
              <Image
                src="/images/image_studyplus_for_school.png"
                alt="Studyplus for School"
                width={440}
                height={227}
              />
            </Box>
            <Heading6 sx={{ mt: 10, textAlign: "center" }}>
              これからの塾を支えるプラットフォーム
            </Heading6>
            <Box sx={{ mt: 6, textAlign: "center" }}>
              <Link href="/service">
                <a className={styles.button3}>詳しくみる</a>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Overline sx={{ mt: 11 }}>NEWS</Overline>
        <Heading3>ニュース</Heading3>
        <Flex sx={{ mt: 9 }}>
          <Box sx={{ mr: 8 }}>
            <Link href="/service">
              <a className={`${styles.tabs} ${styles.active}`}>すべて</a>
            </Link>
          </Box>
          <Box sx={{ mr: 8 }}>
            <Link href="/service">
              <a className={styles.tabs}>お知らせ</a>
            </Link>
          </Box>
          <Box sx={{ mr: 8 }}>
            <Link href="/service">
              <a className={styles.tabs}>プレスリリース</a>
            </Link>
          </Box>
          <Box>
            <Link href="/service">
              <a className={styles.tabs}>メディア掲載</a>
            </Link>
          </Box>
        </Flex>
        <News
          date="2021年5月1日"
          title="かんき出版×電子参考書サブスク「ポルト」が学習SNSアプリ「Studyplus」にて英単語クイズ企画「英語語彙レベルチェック2021」を開催！ ～かんき出版の人気参考書「大学入試レベル別英語長文問題ソリューション」シリーズをもとにした厳選30問で英単語力をチェックできるコラボ企画～"
          url="/news"
          mt={10}
        />
        <News
          date="2021年4月27日"
          title="スタディプラスの運営する電子参考書サブスク「ポルト」が電流協アワード2021 電流協大賞を受賞しました"
          url="/news"
          mt={6}
        />
        <News
          date="2021年4月22日"
          title="スタディプラスの運営する電子参考書サブスク「ポルト」の提供冊数が200冊を突破しました"
          url="/news"
          mt={6}
        />
        <News
          date="2021年3月31日"
          title="Studyplus for Schoolが新機能「コンテンツ配信機能」をリリース！先生が独自に作成した動画やファイルなどのコンテンツを生徒に配信できるようになります"
          url="/news"
          mt={6}
        />
        <News
          date="2021年2月25日"
          title="スタディプラス、Google for Education™ の Technology Partner に認定。学習管理プラットフォーム「Studyplus for School」、学習プラットフォーム「Google Classroom™」との接続を開始。"
          url="/news"
          mt={6}
        />
        <Overline sx={{ mt: 11 }}>COMPANY</Overline>
        <Heading3>企業情報</Heading3>
        <Grid gap={10} columns={[2, 4]} sx={{ mt: 7 }}>
          <CompanyInfo url="/company" title="会社概要" />
          <CompanyInfo url="/company" title="幹部紹介" />
          <CompanyInfo url="/ir" title="IR情報" />
          <CompanyInfo url="/recruit" title="採用情報" />
        </Grid>
      </Container>
      <Box sx={{ bg: "primary", mt: 12, py: 12 }}>
        <Box
          sx={{
            fontSize: [7, 8, 9],
            lineHeight: ["44px", "56px", "76px"],
            color: "white",
            textAlign: "center",
          }}
        >
          新しい教育の仕組みを
          <br />
          一緒に生み出しませんか？
        </Box>
        <Box
          sx={{
            mt: 10,
            textAlign: "center",
            "& a": { bg: "white", color: "primary" },
          }}
        >
          <Link href="/service">
            <a className={styles.button1}>採用情報をみる</a>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
