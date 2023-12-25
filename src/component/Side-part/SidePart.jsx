
import React from 'react';
import './SidePart.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SidePart = (props) => {
    const times = props.timeCart

    const texts = props.text
    
       let textInfo = ''
     for(const text of texts){
        textInfo = textInfo + text.text
       console.log(textInfo)
     }


    let addTime = 0
    for(const time of times){
        addTime = addTime + time.number;
    }
  
 
    return (
        <div className='side-part'>
            <div className='time-spend'>
            <p>Spent time on read : {addTime} </p>
            </div>
            <div className='side-backGround'>
                <h3>Back Ground Blog: {texts.length} </h3>
                <p>{textInfo}</p>
               
            </div>
        </div>
    );
};

export default SidePart;