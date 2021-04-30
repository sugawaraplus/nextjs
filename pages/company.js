/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import React, { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Heading1 } from '../components/typography';

const Company = () => {
  return (
    <Layout>
      <Head>
        <title>Company | {siteTitle}</title>
      </Head>
      <Container>
        <Heading1>Company</Heading1>
      </Container>
    </Layout>
  );
};

export default Company;
