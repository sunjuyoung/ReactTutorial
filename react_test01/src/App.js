import React, { useState,useRef,useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function createBulkList() {
  const array=[];
  for(var i=1; i<1000; i++){
    array.push({
      id:i,
      text:'테스트'+i,
      checked: false
    })

  }
  return array;
}


function App() {
  const [todos, setTodos] = useState([
    {id:1,
    text:'리액트',
    checked:false
  },
  {id:2,
    text:'스프링',
    checked:false
  },
  {id:3,
    text:'파이썬',
    checked:true
  }
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(text=>{
    const todo={
      id:nextId.current,
      text,
      checked:false
    };
    setTodos(todos.concat(todo));
    nextId.current +=1;
  },[todos]);

  const onRemove = useCallback(id=>{
    const newTodos = todos.filter(todo=> todo.id !== id);
    setTodos(newTodos);
  },[todos]);

  const onToggle = useCallback(id=>{
      const newTodos = todos.map(todo=>todo.id === id? {...todo,checked:!todo.checked} : todo)
      setTodos(newTodos);

  },[todos]);

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert}></TodoInsert>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
  </TodoTemplate>;
}

export default App;
