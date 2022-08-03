import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { API_SEARCH, API_KEY } from "../Api";
import styles from "./Search.module.css";
import { getSearchedMovies } from "../Hooks/useFetch";

function Search() {
  const url = API_SEARCH;
  const key = API_KEY;

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    const searchQueryUrl = `${url}?${key}&query=${query}&language=pt-BR`;
    getSearchedMovies(searchQueryUrl, setMovies);
  }, [key, url, query]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resultado para: {query}</h2>
      <div className={styles.moviesContainer}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Search;
