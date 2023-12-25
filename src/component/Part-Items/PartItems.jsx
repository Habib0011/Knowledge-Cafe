import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark} from '@fortawesome/free-solid-svg-icons'
import './PartItems.css'
import author from '../../images/boy1.png'

const PartItems = (props) => {
    const {name,picture,number} = props.part
    const timeCalculate = props.timeCalculate
    return (
        <div className='part-items'>
            <div className='part-item'>
                <img src={picture} alt="" />
                <h2>{name}</h2>
            </div>

            <div className='author-part'>
                <div className='author-info'>
                    <img src={author} alt="" />
                    <p>Author</p>
                </div>
                <div className='book-mark'>
                    <p><span>{number}</span> min read <a href="#" onClick={timeCalculate} ><FontAwesomeIcon icon={faBookBookmark} /></a></p>
                </div>
            </div>

            <h2>
            How to get your first job as a self-taught <br />programmer
            </h2>

            <u><a href="#">mark as a read</a></u>
            
        </div>
    );
};

export default PartItems;