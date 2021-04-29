import React from 'react'
import PropTypes from 'prop-types'
import MovieModel from './utils/Movie.model'
import Movie from './Movie'

const ScheduleTable = ({data}) => {
    // const movies = data.movies.map(currentMovie => {
    //     let movie = new MovieModel(currentMovie.title, 
    //         currentMovie.synopsis, currentMovie.cast, currentMovie.directors, 
    //         currentMovie.showingTimes, currentMovie.releaseDate,
    //         currentMovie.filmStatus, currentMovie.img,
    //         currentMovie._id);
    //     return <Movie movie={movie} key={movie._id} />;
    // });

    const populateTable = () => {
        if(data?.scheduleTable?.length > 0){
            return data.scheduleTable.map(currentMovie => {
                const { 
                    title, 
                    showingTimes, 
                    image, 
                    _id } = currentMovie 
                const movie = new MovieModel( 
                    title, 
                    showingTimes, 
                    image, 
                    _id
                );
                return <Movie movie={movie} key={movie._id} />
            });
        }
        return (
            <tr>
                {/* <td id={dataStatus.name} colSpan="3">{dataStatus.message}</td> */}
            </tr>
        )
    }
    return(
        <div className="row">
            <h1>What's On</h1>
            <table className="table table-striped">
                <tbody>
                    {populateTable()}
                </tbody>
            </table>
        </div>
    )
};

// ScheduleTable.propTypes = {
//     data: PropTypes.exact({
//         movies: PropTypes.arrayOf(
//             PropTypes.exact({
//                 _id: PropTypes.string,
//                 title: PropTypes.string,
//                 synopsis: PropTypes.string,
//                 cast: PropTypes.string,
//                 directors: PropTypes.string,
//                 showingTimes: PropTypes.string,
//                 releaseDate: PropTypes.string,
//                 filmStatus: PropTypes.string,
//                 img: PropTypes.string
//             })
//         )
//     })
// };

export default ScheduleTable;