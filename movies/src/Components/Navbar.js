import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

import { BiSearchAlt, BiCameraMovie } from "react-icons/bi";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="Submit">
          <BiSearchAlt />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
