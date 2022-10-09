import { useState } from 'react';
import './App.css';
import './static/css/animate.css';
import './static/css/datatables.min.css';
//import './static/js/jquery.min.js';
//import './static/js/datatables.min.js';
import star_wars from './star-wars.gif';
import loader from './static/images/loader.gif';
import Movies from './api/Movies';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  const [start, setStart] = useState('');
  const [slideIn, setSlideIn] = useState('');
  const [isLoadDetail, setLoadDetail] = useState(false);
  const [detail, setDetail] = useState(null);
  const diveIn = () => {
    setStart('bounceOut');
    setTimeout(() => {
      setStart('hide');
      setSlideIn('slideInDown show');
    }, 600);
  }
  const Change = () => {
    var film = parseInt(document.getElementById('film').value);
    setLoadDetail(true);
    setDetail(film);
  }
  const {movies, isLoading, netErr} = Movies('https://swapi.dev/api/films/');
  return (
    <div className="App">
      <header className={`App-header animate_box animated-fast ${start}`}>
        <img src={star_wars} className="App-logo" alt="logo" />
        <br />
        <h1>Star Wars Movies List</h1>
        <br />
        <a onClick={diveIn} className="animate-box pulse animated-fast" style={{animationIterationCount: "infinite"}}><b>Dive In</b></a>
      </header>
      <div style={{display: "none"}} className={`App-header animate_box animated-fast ${slideIn}`}>
        <img src={star_wars} className="App-logo" alt="logo" />
        <br />
        <h3>Choose a Star Wars Movie</h3>
        <br />
          {!isLoading && movies ?
            <MovieList movies={movies} Change={Change} />
            : <div><img src={loader} alt="" /></div>}
        <br />
        <br />
        {detail ? <MovieDetails movie={movies.filter((movie) => movie.episode_id == detail)} detail={detail} /> : <div><img src={loader} alt=""/></div> }
      </div>
      
    </div>
  );
}

export default App;
