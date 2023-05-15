import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Blond Album Cover" src="../images/blond_cover.jpeg" />
      </Layout>
    </main>
  );
};

export const Head = () => <title>MOO's Portfolio</title>;

export default IndexPage;
