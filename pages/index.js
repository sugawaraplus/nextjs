/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container} from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Heading1 } from '../components/typography';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Heading1>Hello</Heading1>
      </Container>
    </Layout>
  );
};

export default Home;