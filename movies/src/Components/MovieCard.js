import { Link } from 'react-router-dom'

import {FaStar} from 'react-icons/fa'
import { API_IMG } from '../Api'

function MovieCard({movie, showLink = true}) {
    const urlImage = API_IMG

    return (
        <div className="movie_card">
            <img src={urlImage + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard