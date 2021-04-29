import React from 'react';

//import film1 from '../../public/images/interstellar.PNG';
//import film2 from '../../public/images/sonic-the-hedgehog.jpg';
//import film3 from '../../public/images/corona.jpg';

const CurrentShowings = ({data}) => {

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <img src={film1} alt="Film 1" width="100%"/>
                </div>
                <div className="col-xs-12 col-md-4">
                    <img src={film2} alt="Film 2" width="100%"/>
                </div>
                <div className="col-xs-12 col-md-4">
                    <img src={film3} alt="Film 3" width="100%"/>
                </div>
            </div>

        </div>
    )
}

export default CurrentShowings
