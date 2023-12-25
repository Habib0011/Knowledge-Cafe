
import React from 'react';
import './SidePart.css'

const SidePart = (props) => {
    const times = props.timeCart

    let addTime = 0
    for(const time of times){
        addTime = addTime + time.number;
    }
  
 
    return (
        <div>
            <div className='time-spend'>
            <p>Spent time on read : {addTime} </p>
            </div>
        </div>
    );
};

export default SidePart;