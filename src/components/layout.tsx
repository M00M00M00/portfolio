import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  siteTitle,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to={'/'} className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to={'/about'} className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to={'/movie'} className={navLinkText}>
              Movie
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to={'/3d'} className={navLinkText}>
              3D
            </Link>
          </li>
        </ul>
      </nav>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
