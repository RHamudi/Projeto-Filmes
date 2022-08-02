import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../Components/MovieCard'
import { API_SEARCH, API_KEY } from '../Api'
import styles from './Search.module.css'

function Search() {
    const url = API_SEARCH
    const key = API_KEY

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        console.log(data)
      };
    
      useEffect(() => {
        const searchQueryUrl = `${url}?${key}&query=${query}`;
        getSearchedMovies(searchQueryUrl);
      }, [key, url, query]);

    return (
        <div className={styles.container}>
          <h2 className={styles.title}>Resultado para: {query}</h2>
          <div className={styles.moviesContainer}>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
        </div>
      );
}

export default Search