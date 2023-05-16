import * as React from 'react';
import LayoutWithoutHeader from '../components/layout-without-header';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <LayoutWithoutHeader pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </LayoutWithoutHeader>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
