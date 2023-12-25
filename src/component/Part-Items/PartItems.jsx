import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark} from '@fortawesome/free-solid-svg-icons'
import './PartItems.css'
import author from '../../images/boy1.png'

const PartItems = (props) => {
    const {name,picture,number,text} = props.part
    // console.log(number)
    const timeCalculate = props.timeCalculate

    const markText = props.markText
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
                    <p><span>{number}</span> min read <a href="#" ><FontAwesomeIcon icon={faBookBookmark} onClick={() =>timeCalculate(props.part)} /></a></p>
                </div>
            </div>
            <h2>{text} </h2>

            <u><a href="#" onClick={()=>markText(props.part)}>mark as a read</a></u>
            
        </div>
    );
};

export default PartItems;