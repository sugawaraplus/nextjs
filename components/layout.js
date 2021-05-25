/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export const siteTitle = `学ぶ喜びをすべての人へ – スタディプラス株式会社`;
export const siteDescription = `タディプラス株式会社は、「学ぶ喜びをすべての人へ」というミッションを掲げ、新しい教育の仕組みをつくる会社です。大学受験生の3人に1人が利用する学習管理プラットフォーム「Studyplus」を運営しています。`;
export const siteAuthor = `スタディプラス株式会社`;

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="author" content={siteAuthor} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {home ? <Header home /> : <Header />}
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
            mt: [7, 12],
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
