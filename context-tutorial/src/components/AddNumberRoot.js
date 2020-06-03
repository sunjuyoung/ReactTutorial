import React from 'react';
import AddNumber from './AddNumber';

const AddNumberRoot =({onSize})=>{
    
  
    return(
      <div>
        <h1>Add Number ROot</h1>
         <AddNumber onSize={onSize}></AddNumber>
      </div>
    );
    }

export default AddNumberRoot;