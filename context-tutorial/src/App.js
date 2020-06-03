import React,{useState} from 'react';
import './App.css'
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';







const App = () => {
  const [number,setNumber] = useState(0);
  const onSize=(value)=>{
    const one = number+value;
    setNumber(one);
  }
  return (
    <div>
      <h1>root</h1>
      <AddNumberRoot onSize={onSize}></AddNumberRoot>
      <DisplayNumberRoot number={number}></DisplayNumberRoot>
    </div>
  );
};




export default App;