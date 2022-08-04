export async function getTopRatedMovies(url, setTopMovies) {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
}

export async function getMovie(url, setMovie) {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
}

export async function getSearchedMovies(url, setMovies, setPagesLength) {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setPagesLength(data.total_pages)
}