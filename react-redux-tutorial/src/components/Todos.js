import React from 'react';

const TodoItem = ({todo,onToggle,onRemove}) => {
    return (
        <div>
            <input type="checkbox" />
            <sapn>예제 테스트</sapn>
            <button>삭제</button>
        </div>
    );
};

const Todos=({
    input,//인풋에 입력되는 텍스트
    todos,//할 일 목록이 있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
})=>{
    const onSubmit = e=>{
        e.preventDefault();
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>

            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />

            </div>
        </div>
    );
};

export default Todos;