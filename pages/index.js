/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import styles from "../styles/utility.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import { Overline, Heading2 } from "../components/typography";

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
      </Container>
    </Layout>
  );
};

export default Home;
