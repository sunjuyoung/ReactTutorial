import React,{useState} from 'react';
import Counter from './Counter'
import Info from './Info'
import UseReduce from './UseReduce'
import Average01 from './Average01'

import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={()=>{
        setVisible(!visible);
      }}>{visible ? '보이기':'숨기기'}</button>
    <Counter />
    {visible || <Info />}
   
   <div><UseReduce /></div> 
   <Average01 />
    </div>
  );
}

export default App;
