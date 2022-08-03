export async function getTopRatedMovies(url, setTopMovies) {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
    console.log(data)
}

export async function getMovie(url, setMovie) {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
}

export async function getSearchedMovies(url, setMovies) {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
}