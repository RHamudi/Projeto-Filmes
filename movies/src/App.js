import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import Movie from './Pages/Movie'
import Search from './Pages/Search';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
