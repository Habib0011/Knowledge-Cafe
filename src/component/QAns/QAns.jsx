import React from 'react';
import './QAns.css'

const QAns = () => {
    return (
        <div className='QAns'>
       
           <h2>Q1.Difference between props and state?</h2>
            <p>Ans1. 
                Props:-it is basically a process that can take things from component and can use differently. <br />
                state:-it is a thing that is used if any user try to change any state in a webstate then we have to declare a state
            </p>

            <h2>Q2.how does useState works?</h2>
            <p>Ans2.
                it is basically deals with an array. we have to declarea to things that is a name and setName and then use the useState.so what we use in the setName the name will get the value.
            </p>
            <h2>Q3.how does useEffect works?</h2>
            <p>Ans3.
                useEffect is generally used for fetch means to loadData from api and it is also used for set and get and remove data from localStorage or any dataBase 
            </p>
            <h2>Q4.how does react work?</h2>
            <p>Ans4.
                React is a uniDirectional programming library it is a library of js.it flows data from top to bottom and use to create SPA for giving  more smooth feel.generally it doesn't load the whole page it just loads the components of the website.We can create different component like similar in looks different in data, stand alone, break down a long size of data and a component where different component is used 
            </p>
      
            
        </div>
    );
};

export default QAns;