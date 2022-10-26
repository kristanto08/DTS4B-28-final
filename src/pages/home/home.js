import axios from "axios";
import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../containers/MovieList";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';


const Home = () => {
    const [user] = useAuthState(auth);
    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=525094b34f3293579a503cfa67bf7a05&language=en-US");
                setPopularMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

   
    return (
        <>
            
           <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
                
            </div>
        </>
    )
}

export default Home
