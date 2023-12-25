import React, { useEffect, useState } from 'react';
import './Main.css'
import PartItems from '../Part-Items/PartItems';
import SidePart from '../Side-part/SidePart';

const Main = () => {
 const [parts, setParts] = useState([])
 console.log(parts)

  useEffect(()=>{
   fetch('fakeData.json')
   .then(res => res.json())
   .then(data => setParts(data))
  },[])

  const timeCalculate = () => {
    let time = document.getElementById('id').innerText
    time = time+5;
    
  }

    return (
        <div className='main-container'>
            <div className='main-part'>
               {
             parts.map(part => <PartItems
               part = {part}
               key ={part.id}
               timeCalculate = {timeCalculate}
             ></PartItems>)
               }
            </div>
            <div className='side-part'>
               <SidePart></SidePart>
            </div>

            
        </div>
    );
};

export default Main;