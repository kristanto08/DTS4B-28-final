import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=525094b34f3293579a503cfa67bf7a05&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

   return (
        <div className="film">
            <div className="film__intro">
                <img className="film__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="film__detail">
                <div className="film__detailLeft">
                    <div className="film__posterBox">
                        <img className="film__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="film__detailRight">
                    <div className="film__detailRightTop">
                        <div className="film__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="film__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="film__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="film__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="film__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="film__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="film__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="film__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="film__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Movies-Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="film__homeButton film__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="film__imdbButton film__Button">IMDb Movies<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
          
            
        </div>
    )
}

export default Movie
