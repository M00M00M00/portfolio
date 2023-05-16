import * as React from 'react';
import LayoutWithoutHeader from '../components/layout-without-header';
import Seo from '../components/seo';
import MovieCardLayout from '../components/movie/movie-layout';
import { graphql } from 'gatsby';

const MoviePage = ({ data }) => {
  return (
    <LayoutWithoutHeader pageTitle="Movie">
      <p>Here's my favorite cool movies.</p>
      {data.allMdx.nodes.map((node) => (
        <MovieCardLayout children={node.frontmatter}></MovieCardLayout>
      ))}
    </LayoutWithoutHeader>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          year
          comment
          poster
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Movie Page" />;

export default MoviePage;
