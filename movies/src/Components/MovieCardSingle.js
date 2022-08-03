import { Link } from 'react-router-dom'

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
  } from "react-icons/bs";

import {FaStar} from 'react-icons/fa'
import { API_IMG } from '../Api'

import styles from './MovieCardSingle.module.css'

function MovieCardSingle({movie, showLink = true}) {
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
            <p className={styles.tagline}>{movie.tagline}</p>
            <div className={styles.info}>
                <h3>
                    <BsWallet2 /> Orçamento:
                </h3>
                <p>{movie.budget}</p>
            </div>
            <div className={styles.info}>
                <h3>
                    <BsGraphUp /> Receita:
                </h3>
                <p>{movie.revenue}</p>
            </div>
            <div className={styles.info}>
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} Minutos</p>
            </div>
            <div className={styles.infoDescription}>
                <h3>
                    <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p>{movie.overview}</p>
            </div>
            </div>
        </div>
    )
}

export default MovieCardSingle