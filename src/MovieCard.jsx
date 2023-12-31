import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
    <div>
            <p>{movie.Year}</p>
        </div>
    <div>
            <img src={movie.Poster !== 'https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg' ? movie.Poster: 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>
     <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;