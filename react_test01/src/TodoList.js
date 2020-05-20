import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';




const TodoList = ({todos,onRemove,onToggle}) => {
    const rowRender = useCallback(({index,key,style})=>{
        const todo=todos[index];
        return(
            <TodoListItem 
            todo={todo}
            key={key}
            onToggle={onToggle} onRemove={onRemove}
            style={style}
            />
        );
    },[onRemove,onToggle,todos])
    return (
       /*  <div className="TodoList">
 
          {todos.map(todo=>
            <TodoListItem onToggle={onToggle} onRemove={onRemove} todo={todo} key={todo.id} />
            )}
            
        </div> */
        <List 
        className="TodoList"
        width={512}
        height={513}
        rowCount={todos.length}  //항목개수
        rowHeight={58}
        rowRenderer={rowRender}  //항목을 렌더링할떄 쓰는 함수
        list={todos}  //배열
        style={{outline:'none'}}  //List에 기본 적용되는 outLIne스타일 제거
        />
    );
};

export default React.memo(TodoList);