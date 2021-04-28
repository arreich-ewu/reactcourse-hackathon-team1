import React from 'react'
import PropTypes from 'prop-types'
import OpeningTimeModel from './utils/OpeningTime.model'
import OpeningTime from './OpeningTime'

const OpeningHoursTable = ({data}) => {
    const openingTimes = data.openingTimes.map(currentTime => {
        let openingTime = new OpeningTimeModel(currentTime.day, currentTime.opening, currentTime.close, currentTime._id);
        return <OpeningTime openingTime={openingTime} key={openingTime._id} />;
    });

    return(
        <div className="row">
            <h3>Opening Hours</h3>
            <table className="table table-striped">
                <tbody>
                    {openingTimes}
                </tbody>
            </table>
        </div>
    )
};

OpeningHoursTable.propTypes = {
    data: PropTypes.exact({
        openingTimes: PropTypes.arrayOf(
            PropTypes.exact({
                _id: PropTypes.string,
                day: PropTypes.string,
                opening: PropTypes.string,
                close: PropTypes.String
            })
        )
    })
};

export default OpeningHoursTable;