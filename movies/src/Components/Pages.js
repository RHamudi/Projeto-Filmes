import styles from "./Pages.module.css";
import { FcNext, FcPrevious } from "react-icons/fc";

function Pages({ setPages, pages, movies }) {
  function pageUp() {
    setPages(pages + 1);
    window.scrollTo(0, 0);
  }

  function pageDown() {
    if (pages !== 1) {
      setPages(pages - 1);
    }
  }
return (
      <section className={styles.component}>
        <button className={styles.pages} onClick={pageDown}>
          <FcPrevious />
        </button>
        <div className={styles.pagesCount}>Pagina: {pages}</div>
        <button className={styles.pages} onClick={pageUp}>
          <FcNext />
        </button>
      </section>
    );
}

export default Pages;
