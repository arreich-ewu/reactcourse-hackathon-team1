import React, { useState, useEffect } from 'react';
import OpeningHoursTable from './OpeningHoursTable'
import ScheduleTable from './ScheduleTable'
import Modal from './utils/Modal'
import axios from 'axios'

const OPENINGTIMESURL = `http://localhost:4000/openingtimes`
const SCHEDULETABLEURL = `http://localhost:4000/films`

const Schedule = () => {

    const [openingTimes, setOpeningTimes] = useState({});
    const [scheduleTable, setScheduleTable] = useState({});
    const [getError, setGetError] = useState(``);

    useEffect(() => {
        const getData = async () => {
            setOpeningTimes(await getOpeningTimes());
            setScheduleTable(await getScheduleTable());
        }

        getData();
    }, []);

    const getOpeningTimes = async () => {
        try{
            const rest = await axios.get(OPENINGTIMESURL);
            console.log(rest.data);
            return rest.data.length?{openingTimes: rest.data} : {error: `There are no opening times to display`};
        } catch(e){
            setGetError(`Data not available from server: ${e.message}`);
            return {error: `Data not available from server: ${e.message}`};
          }
    };

    const getScheduleTable = async () => {
        try{
            const rest = await axios.get(SCHEDULETABLEURL);
            return rest.data.length?{scheduleTable: rest.data} : {error: `There are no opening times to display`};
        } catch(e){
            setGetError(`Data not available from server: ${e.message}`);
            return {error: `Data not available from server: ${e.message}`};
          }
    };

    return (
        <>
            {getError && <Modal handleClose={() => setGetError('')}
            message={getError} />}
            <div className="container">
                {/* <h1>Opening Hours</h1> */}
                <OpeningHoursTable data={ openingTimes }/>
                {/* <h1>What's On</h1> */}
                <ScheduleTable data={ scheduleTable }/>
            </div>
        </>
    );
}

export default Schedule;