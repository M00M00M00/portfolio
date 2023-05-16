import {
  container,
  heading,
  navLinkItem,
  navLinks,
  navLinkText,
} from './layout.module.css';
import { Link } from 'gatsby';
import * as React from 'react';

const LayoutWithoutHeader = ({ pageTitle, children }) => {
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
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default LayoutWithoutHeader;
