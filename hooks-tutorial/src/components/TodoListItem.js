import React from 'react';

const TodoListItem = ({todo}) => {
    
    return (
        <div>
            <ul>
                <li> <button>@</button>{todo.text} <button>x</button></li>
            </ul>
        
        </div>
    );
};

export default TodoListItem;