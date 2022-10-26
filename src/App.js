import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './pages/home/home';
import MovieList from './containers/MovieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
       <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
    </div>
  );
}

export default App;