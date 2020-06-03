const CHANGE = 'todos/CHANGE';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const INSERT = 'todos/INSERT';

export const change = input=>({
    type:CHANGE,
    input
})

let id = 1;
export const insert = text=>({
    type:INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
})

export const toggle = id =>({
    type:TOGGLE,
    id
})
export const remove = id=>({
    type:REMOVE,
    id
})

const initialState ={
    input:'',
    todos:[]
}

function todos(state=initialState,action){
    switch(action.type){
        case INSERT:
            return{
                ...state,
                todos:state.todos.concat(action.todo)
            };
        case CHANGE:
            return{
                ...state,
                input:action.input
            }
        case TOGGLE:
            return{
                ...state,
                todos:state.todos.map(todo=>todo.id===action.id? {...todo,done:true}:todo)
            }
        case REMOVE:
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id !== action.id)
            }

            default:
                return state;
    }

}

export default todos;