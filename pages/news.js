/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import React, { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { Heading1 } from "../components/typography";

const News = () => {
  return (
    <Layout>
      <Head>
        <title>News | {siteTitle}</title>
      </Head>
      <Container>
        <Heading1>News</Heading1>
      </Container>
    </Layout>
  );
};

export default News;
