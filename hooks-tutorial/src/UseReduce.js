import React ,{useReducer} from 'react';

function reducer(state,action){
    //action,type에 따른 다른 작업 수행
    switch(action.type){
        case 'INCREMENT': return {value:state.value +1};
        case 'DECREMENT' : return {value:state.value-1};
        default:
            return state;
    }
}

const UseReduce = () => {
    const[state,dispatch] = useReducer(reducer,{value:0});
  
    return (
        <div>
            <h2>{state.value}</h2>
          <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
          <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
};

export default UseReduce;