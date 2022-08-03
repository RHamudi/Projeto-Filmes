import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../Api";
import MovieCard from "../Components/MovieCard";
import styles from './Home.module.css'
import { getTopRatedMovies } from '../Hooks/useFetch'

function Home() {
  const url = API_URL;
  const key = API_KEY;

  const [topMovies, setTopMovies] = useState([]);

  

  useEffect(() => {
    const topRatedUrl = `${url}top_rated?${key}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl, setTopMovies);
  }, [key, url]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Melhores Filmes:</h2>
      <div className={styles.moviesContainer}>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
}

export default Home;
