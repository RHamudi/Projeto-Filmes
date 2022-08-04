import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { API_SEARCH, API_KEY } from "../Api";
import styles from "./Search.module.css";
import { getSearchedMovies } from "../Hooks/useFetch";
import Pages from "../Components/Pages";
import NotFound from "../Components/NotFound";

function Search() {
  const url = API_SEARCH;
  const key = API_KEY;

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [pagesLength, setPagesLength] = useState(0);
  const query = searchParams.get("q");

  useEffect(() => {
    const searchQueryUrl = `${url}?${key}&query=${query}&language=pt-BR&page=${pages}`;
    getSearchedMovies(searchQueryUrl, setMovies, setPagesLength);
  }, [key, url, query, pages]);

  if (pages <= pagesLength) return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Resultado para: <div className={styles.query}>{query}</div>
        </h2>
        <div className={styles.moviesContainer}>
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
      <Pages setPages={setPages} pages={pages} movie={movies} />
    </>
  );
  if(pages > pagesLength) return <NotFound />  
}

export default Search;
