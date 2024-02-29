import React, { useState } from 'react';
import './index.css';




const App = () => {

  const d=new Date().toLocaleTimeString();
 

    const state = useState();
    const [count, setCount] = useState(d);


    const IncrFunc = () => {
         
        let UpdateTime=new Date().toLocaleTimeString();
        setCount(UpdateTime);

    }

    return (

        <>
            <h1> {count} </h1>
            <button className="btn" onClick={IncrFunc}>Click me </button>

        </>
    );


}


export default App;