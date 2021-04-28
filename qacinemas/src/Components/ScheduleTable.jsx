import React from 'react'
import PropTypes from 'prop-types'
import MovieModel from './utils/Movie.model'
import Movie from './Movie'

const ScheduleTable = ({data}) => {
    const movies = data.movies.map(currentMovie => {
        let movie = new MovieModel(currentMovie.title, 
            currentMovie.synopsis, currentMovie.cast, currentMovie.directors, 
            currentMovie.showingTimes, currentMovie.releaseDate,
            currentMovie.filmStatus, currentMovie.img,
            currentMovie._id);
        return <Movie movie={movie} key={movie._id} />;
    });

    return(
        <div className="row">
            <table className="table table-striped">
                <tbody>
                    {movies}
                </tbody>
            </table>
        </div>
    )
};

ScheduleTable.propTypes = {
    data: PropTypes.exact({
        movies: PropTypes.arrayOf(
            PropTypes.exact({
                _id: PropTypes.string,
                title: PropTypes.string,
                synopsis: PropTypes.string,
                cast: PropTypes.string,
                directors: PropTypes.string,
                showingTimes: PropTypes.string,
                releaseDate: PropTypes.string,
                filmStatus: PropTypes.string,
                img: PropTypes.string
            })
        )
    })
};

export default ScheduleTable;