import React from 'react';
import {change,insert,toggle,remove} from '../modules/todos1';
import {connect} from 'react-redux';
import Todos1 from '../components/Todos1'



const TodosContainer = ({todos,insert,toggle,remove,input,change}) => {
    return (
        <div>
            <Todos1 input={input} 
            onToggle={toggle} 
            onRemove={remove} 
            onChangeInput={change}
            onInsert={insert}
            todos={todos}></Todos1>
        </div>
    );
};

export default connect(({todos1})=>({
    input:todos1.input,
    todos:todos1.todos
}),{
    insert,
    change,
    toggle,
    remove
})(TodosContainer);