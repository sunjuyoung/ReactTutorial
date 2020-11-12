import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({title,summary,poster,year,genres}) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title" style={{backgroundColor:'red'}}>{title}</h3>
            <h3 className="movie__year">{year}</h3>
            <h3 className="movie__summary">{summary}</h3>
            <ul className="movie__genres">
                {genres.map((genre,index)=>{
                    return <li  key={index}className="movie__genre">{genre}</li>
                })}
            </ul>
        </div>
        </div>
    );
};

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;