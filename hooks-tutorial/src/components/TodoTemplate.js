import React from 'react';

const TodoTemplate = ({children}) => {
    return (
        <div>
            <span>할일</span>
            <span>{children}</span>
        </div>
    );
};

export default TodoTemplate;