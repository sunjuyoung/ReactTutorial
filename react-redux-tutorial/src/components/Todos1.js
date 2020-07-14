import React from 'react';

const Items =({todo,onToggle,onRemove})=>{
    return(
        <div>
            <input type="checkbox" checked={todo.done} onClick={()=>onToggle(todo.id)}/>
            <span style={{textDecoration:todo.done?'line-through':'none'}}>{todo.text}</span>
            <button onClick={()=>onRemove(todo.id)}>삭제</button>
        </div>
    );
}


const Todos1 = ({
    todos,
    input,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit =e =>{
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }
    const onChange =e =>onChangeInput(e.target.value)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <div>
               {todos.map(todo=>(<Items  key={todo.id}todo={todo} onRemove={onRemove} onToggle={onToggle}/>))}
            </div>
            
        </div>
    );
};

export default Todos1;