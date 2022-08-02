import { useEffect, useState } from "react"
import { API_KEY, API_URL } from "../Api";


function Home() {
    const url = API_URL;
    const key = API_KEY;

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url)=> {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results)
    }

    useEffect(()=>{
        const topRatedUrl = `${url}top_rated?${key}`
        getTopRatedMovies(topRatedUrl)
    }, [key, url])

    return ( <div className="container">  
        <h2 className="title">Melhores Filmes:</h2>
        </div>
    )
}

export default Home