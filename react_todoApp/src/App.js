import React ,{useState,useCallback,useRef}from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';


function App() {
  const [todos,setTodos] = useState([

   
  ])

  //고유값으로 사용될 Id, ref를 사용하여 변수 담기
  const nextId = useRef(1);

  //추가
  const onInsert = text=>{
    const todo= {
      id:nextId.current,
      text,
      checked:false
    };
    setTodos(todos.concat(todo));
    nextId.current +=1;   //nextid 1씩 더하기
  }


  //삭제
  const onRemove = useCallback(id=>{
    setTodos(todos.filter(todo=> todo.id !== id));
  },[todos]);


  //수정
  const onModify = useCallback(id=>{
    setTodos(todos.map(todo=>todo.id === id ? {...todo,checked : !todo.checked} : todo))

  },[todos]);


  return (
    <TodoTemplate>
<TodoInsert onInsert={onInsert}></TodoInsert>
    <TodoList todos={todos} onRemove={onRemove} onModify={onModify}/>
    </TodoTemplate>

    
  );
}

export default App;
