import * as React from 'react';
import {
  movieCardContainer,
  cardHeading,
  moviePoster,
  cardYear,
  movieComment,
} from './movie-layout.module.css';

const MovieCardLayout = ({ children }) => {
  const { title, year, comment, poster } = children;

  return (
    <div className={movieCardContainer}>
      <h2 className={cardHeading}>{title}</h2>
      <p className={cardYear}>{year}</p>
      <div></div>
      <p className={movieComment}>{comment}</p>
      <div></div>
      <img src={poster} alt={title} className={moviePoster} />
    </div>
  );
};

export default MovieCardLayout;
