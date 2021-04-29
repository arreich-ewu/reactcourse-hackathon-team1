import React from 'react';

//import popcorn from '../../public/images/popcorn.jpeg';

import HomePageArticle from './HomePageArticle';
import CurrentShowings from "./CurrentShowings";

const Home = ({data}) => {

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
        else if (data?.images) {
            const ds = data.images.length > 0 ?
                {
                    name: `data`,
                    message: null
                } :
                {
                    name: `nodata`,
                    message: `There were no images previously saved`
                }
        }
        else {
            setDataStatus({
                name: `loading`,
                message: `Data is loading...`
            })
        }
    }, [data]);

    
    return (
        <>
            <div className="container"><img src={popcorn} alt="Popcorn"/></div>
            <div className="container">
                <h1>Team 1 Cinemas</h1>
            </div>
            <HomePageArticle title="Welcome to Team 1 Cinemas"/>
            <CurrentShowings/>
            <HomePageArticle title="Check out our latest showings!"/>
        </>
    );
}

export default Home;