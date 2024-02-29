// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Cards';
// import Series from './Source';
// import './index.css';
// import Heading from './Heading';


// let input="amazon";

// ReactDOM.render(

//   <>



//     <Heading />


//     <div className="box">

//       {Series.map((val) => {

//         if (val.series == input) {
//           return (

//             <Card
//               imgsrc={val.imgsrc}
//               title={val.title}
//               para={val.para}
//             />
//            );
//         }else{



//         }


//       })}

//     </div>

//   </>,
//   document.getElementById("root")


// );


// ============================ React Hooks ====================


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




ReactDOM.render(

  
  <>
    <App />

  </>,

  document.getElementById("root")

);

