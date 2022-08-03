import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovie } from "../Hooks/useFetch"

import { API_KEY, API_URL } from "../Api";
import MovieCardSingle from "../Components/MovieCardSingle";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieUrl = `${API_URL}${id}?${API_KEY}&language=pt-BR`;
    getMovie(movieUrl, setMovie);
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <MovieCardSingle movie={movie} showLink={false} />
        </>
      )}
    </div>
  );
}

export default Movie;
