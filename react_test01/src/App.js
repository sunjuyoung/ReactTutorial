import React, { useState,useRef,useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

//데이터 자동생성
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
  //함수로 넣어주면 리렌더링 될때마다 함수 호출
  //파라미터형태로 넣어주면 컴포넌트가 처음 렌더링 될때만 실행
  const [todos, setTodos] = useState(createBulkList);

  const nextId = useRef(1000);

  const onInsert = useCallback(text=>{
    const todo={
      id:nextId.current,
      text,
      checked:false
    };
    setTodos(todos=>todos.concat(todo));
    nextId.current +=1;
  },[]);

  const onRemove = useCallback(id=>{
    setTodos(todos=>todos.filter(todo=> todo.id !== id));
  },[]);

  const onToggle = useCallback(id=>{
      setTodos(todos=>todos.map(todo=>todo.id === id? {...todo,checked:!todo.checked} : todo));

  },[]);

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert}></TodoInsert>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
  </TodoTemplate>;
}

export default App;
