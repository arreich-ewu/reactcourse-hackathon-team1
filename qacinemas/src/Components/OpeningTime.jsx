import React from 'react'
import PropTypes from 'prop-types'
import OpeningTimeModel from './utils/OpeningTime.model'

const OpeningTime = ( {openingTime} ) => {
    return(
        <tr>
            <td>{openingTime.day}</td>
            <td>{openingTime.opening}-{openingTime.close}</td>
        </tr>
    )
}

OpeningTime.propTypes = {
    openingTime: PropTypes.instanceOf(OpeningTimeModel)
}

export default OpeningTime;
