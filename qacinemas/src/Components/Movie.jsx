import React from 'react'
import PropTypes from 'prop-types'
import MovieModel from './utils/Movie.model'

const Movie = ( {movie} ) => {
    //const releaseDate = new Date(Date.parse(movie.releaseDate)).toUTCString();
    return(
        <tr>
            <td>{movie.title}</td>
            <td>{movie.showingTimes}</td>
            <td>{movie.img}</td>
        </tr>
    )
}

Movie.propTypes = {
    movie: PropTypes.instanceOf(MovieModel)
}

export default Movie;
