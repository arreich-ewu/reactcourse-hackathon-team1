import React, { useState, useEffect } from 'react';

import ImageContainer from '../ImageContainer';

//import film1 from '../../public/images/interstellar.PNG';
//import film2 from '../../public/images/sonic-the-hedgehog.jpg';
//import film3 from '../../public/images/corona.jpg';

const CurrentShowings = ({data}) => {

    const [dataStatus, setDataStatus] = useState({
        name: `loading`,
        message: `Data is loading...`
    });

    useEffect(() => {
        if (data?.error) {
            setDataStatus({
                name: `error`,
                message: data.error
            });
        }
        else if (data?.length > 0 ?
            
                {
                    name: `data`,
                    message: null
                } :
                {
                    name: `nodata`,
                    message: `There were no todos previously saved`
                }
        
        else {
            setDataStatus({
                name: `loading`,
                message: `Data is loading...`
            })
        }
    }, [data]);

    const populateRow = () => {
        if (data?.length > 0) {
            return data.map(currentFilm => {
                return (
                    <>
                    <div className="col-xs-12 col-md-4">
                        <ImageContainer src={currentFilm.img} alt={currentFilm.title} key={currentFilm._id} />
                    </div>
                    </>
                );
            });
        }
        return (<div id={dataStatus.name} colSpan="3">{dataStatus.message} </div>
        );
    }
    
    return (
        <div className="container">
            <div className="row">{populateRow()}</div>
        </div>
    )
}

export default CurrentShowings;
