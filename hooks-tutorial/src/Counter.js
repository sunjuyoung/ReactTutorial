import React ,{useState} from 'react';

const Counter = () => {
    const [number , setNumber]=useState(0);

    const handleClick = ()=>{
        setNumber(number+1);
    }


    return (
        <div>
            <h2>{number}</h2>
            <button onClick={handleClick}>+버튼</button>
            <button onClick={()=> setNumber(number-1)}>-버튼</button>
            
        </div>
    );
};

export default Counter;