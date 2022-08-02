import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

import { BiSearchAlt, BiCameraMovie } from "react-icons/bi";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="Submit">
          <BiSearchAlt />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
