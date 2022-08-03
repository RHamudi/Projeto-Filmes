import styles from './Pages.module.css'
import { FcNext, FcPrevious } from 'react-icons/fc'

function Pages({setPages, pages}) {
    function pageUp() {
        setPages(3)
    }

    function pageDown() {
        setPages(1)
    }

    return (
        <section className={styles.component}>
            <div onClick={pageDown}><FcPrevious/></div>
            <div>{pages}</div>
            <div onClick={}><FcNext/></div>
        </section>
    )
}

export default Pages