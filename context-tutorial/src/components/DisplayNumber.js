import React from 'react';

const DisplayNumber =({number})=>{
    return(
      <div>
        <h1>DisplayNumber</h1>
        <input type="text" value={number} readOnly></input>
      </div>
    );
    }

export default DisplayNumber;