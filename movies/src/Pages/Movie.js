import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Movie.module.css";

import { API_KEY, API_URL } from "../Api";
import MovieCardSingle from "../Components/MovieCardSingle";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${API_URL}${id}?${API_KEY}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className={styles.moviePage}>
      {movie && (
        <>
          <MovieCardSingle movie={movie} showLink={false} />
        </>
      )}
    </div>
  );
}

export default Movie;
