import {createAction,handleActions} from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

export const changeInput = createAction(CHANGE_INPUT,input=>input);
let id=1;
export const insert = createAction(INSERT,text=>({id:id++,text,done:false}))
export const remove = createAction(REMOVE,id=>id);
export const toggle = createAction(TOGGLE,id=>id);

const todos = handleActions(
    {
    [CHANGE_INPUT]:(state,{payload:input})=>({...state,input}),
    [INSERT]:(state,{payload:})

}
);

/* 
export const changeInput = input=>({
    type:CHANGE_INPUT,
    input
})
let id = 3;//insert 가 호출 될때마다 1씩 더해집니다
export const insert = text=>({
    type:INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
})

export const toggle =id=>({
    type:TOGGLE,
    id
})

export const remove = id=>({
    type:REMOVE,
    id
})

const initialState = {
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스',
            done:false
        },
        {
            id:2,
            text:'리액트',
            done:true
        }
    ]
}
 */
function todos(state=initialState,action){
    switch(action.type){
        case CHANGE_INPUT:
            return {
                ...state,
                input:action.input
            };
        case INSERT:
            return{
                ...state,
                todos:state.todos.concat(action.todo)
            };
        case TOGGLE:
            return{
                ...state,
                todos:state.todos.map(todo=>(todo.id===action.id? {...todo,done:!todo.done}:todo))
            }
        case REMOVE:
            return{
                ...state,
                todos:state.todos.filter(todo=>(todo.id !==action.id))
            }
        


            default:return state;
    }
}

export default todos;