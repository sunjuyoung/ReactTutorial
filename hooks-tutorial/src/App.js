import React,{useState} from 'react';
import Counter from './Counter'
import Info from './Info'

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
    </div>
  );
}

export default App;
