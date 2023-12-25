
import React from 'react';
import './Header.css'
import logo from '../../images/4.jpg'

const Header = () => {
    return (
        <div>
           <div className='header'>
           <h2>Programming Cafe</h2>
            <img src={logo} alt="" />
           </div>
           <div className='hr'>
            <hr />
           </div>
            
        </div>
    );
};

export default Header;