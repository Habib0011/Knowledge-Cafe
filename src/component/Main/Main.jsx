import React, { useEffect, useState } from 'react';
import './Main.css'
import PartItems from '../Part-Items/PartItems';
import SidePart from '../Side-part/SidePart';

const Main = () => {
 const [parts, setParts] = useState([])
 const [timeCart, setTimeCart] = useState([])
 console.log(timeCart)
//  console.log(parts)

  useEffect(()=>{
   fetch('fakeData.json')
   .then(res => res.json())
   .then(data => setParts(data))
  },[])



  const timeCalculate = (part) => {
    const newTimeArray = [...timeCart,part]
    setTimeCart(newTimeArray)

   
    
  }

    return (
        <div className='main-container'>
            <div className='main-part'>
               {
             parts.map(part => <PartItems
               part = {part}
               timeCalculate = {timeCalculate}
               key ={part.id}
             ></PartItems>)
               }
            </div>
            <div className='side-part'>
               <SidePart
               timeCart = {timeCart}
               ></SidePart>
            </div>

            
        </div>
    );
};

export default Main;