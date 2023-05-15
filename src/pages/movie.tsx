import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

const MoviePage = ({ data }) => {
  return (
    <Layout pageTitle="Movie Page">
      <p>Here's my favorite cool movies.</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Movie Page" />;

export default MoviePage;
