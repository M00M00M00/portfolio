import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import { mainImange } from '../components/layout.module.css';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <StaticImage
          alt="Blond Album Cover"
          src="../images/blond_cover.jpeg"
          className={mainImange}
        />
        <div></div>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="MOO's Portfolio!" />;

export default IndexPage;
