import styles from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        navigate('/')
    }

    return (
        <section className={styles.notFound}>
            <p>Error 404: Page NotFound</p>
            <button onClick={handleClick} className={styles.button}>Return Home</button>
        </section>
    )
}

export default NotFound