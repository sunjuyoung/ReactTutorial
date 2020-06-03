import React from 'react';

const Items =({todo,onToggle,onRemove})=>{
    return(
        <div>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <button>삭제</button>
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
               {todos.map(todo=>(<Items  key={todo.id}todo={todo} />))}
            </div>
            
        </div>
    );
};

export default Todos1;