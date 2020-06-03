import React from 'react';
import DisplayNumber from './DisplayNumber';

const DisplayNumberRoot =({number})=>{
    return(
      <div>
        <h1>DisplayNumberRoot</h1>
         <DisplayNumber number={number}></DisplayNumber>
      </div>
    );
    }
export default DisplayNumberRoot;