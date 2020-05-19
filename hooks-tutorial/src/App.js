import React,{useState} from 'react';
import Counter from './Counter'
import Info from './Info'
import UseReduce from './UseReduce'
import Average01 from './Average01'
import MyComponent from './MyComponent'
import IterationSample from './IterationSample';

import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <IterationSample />
    </div>
  );
}

export default App;
