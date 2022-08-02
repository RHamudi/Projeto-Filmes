import { Link } from 'react-router-dom'

import styles from './MovieCard.module.css'

import {FaStar} from 'react-icons/fa'
import { API_IMG } from '../Api'

function MovieCard({movie, showLink = true}) {
    const urlImage = API_IMG

    return (
        <div className={styles.Card}>
            <img src={urlImage + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            <div className={styles.button}>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
            </div>
        </div>
    )
}

export default MovieCard