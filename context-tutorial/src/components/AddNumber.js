import React,{useState} from 'react';


const AddNumber = ({onSize}) => {
    const [size,setSize] = useState(1)
    const onChange  =(e)=>{
        setSize(e.target.value);
    };
    const onClick=()=>{
        onSize(size);
    };
    return (
      <div>
        <h1>Ad number</h1>
        <input type="button" value="+" onClick={onClick}></input>
        <input type="text" value={size} onChange={onChange}/>
      </div>
    );
  };

export default AddNumber;