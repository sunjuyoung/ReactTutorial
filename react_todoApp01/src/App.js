import React,{useState,useRef,useCallback} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';


function createBulkTodos(){
  const array=[];

  for(let i = 1; i<= 2000; i++){
    array.push({
      id:i,
      text: `할일 ${i}`,
      checked : false,

    });
  }
  return array;
}


function App() {

/*   const [todos,setTodos] = useState([{
   
  }]); */


  //함수 형태로 넣어주면 컴포넌트가 처음 렌더링될때만 함수가 실행된다.
  const [todos,setTodos] = useState(createBulkTodos);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수담기
  const nextId = useRef(1);

  //추가
  const onInsert = useCallback(text=>{
      const todo ={
         id: nextId.current,
         text,
         checked : false,
      };

      setTodos(todos.concat(todo));
      nextId.current+=2000;

  },[todos]);



  //삭제
  const onRemove = useCallback(id=>{
      setTodos(todos.filter(todo=> todo.id !== id));
  },[todos]);



  //수정
  const onToggle = useCallback(id=>{
      setTodos(todos.map(todo=>todo.id === id ? {...todo, checked : !todo.checked} : todo));
  },[todos]);

  return (
    <TodoTemplate >
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;

