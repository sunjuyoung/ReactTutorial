import React from 'react';
import CounterContainer1 from './containers/CounterContainer1';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
     <CounterContainer1 />
      <hr></hr>
      <TodosContainer />
    </div>
  );
};

export default App;