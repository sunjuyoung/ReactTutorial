import {createAction,handleActions} from 'redux-actions';

//액션 타입
//대문자로 정의하고 문자열내용은 모듈이름/액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수
/* export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});
 */
//액션 생성함수
export const increase = createAction(INCREASE); 
export const decrease = createAction(DECREASE);

const initialState={
    number :0
};


const counter = handleActions(
    {
        [INCREASE]:(state,action)=>({number:state.number+1}),
        [DECREASE]:(state,action)=>({number:state.number -1})
    },
    initialState
);

/* function counter(state=initialState,action){
    switch (action.type){
        case INCREASE:
        return{
            number:state.number +1
        }
        case DECREASE:
            return{number : state.number-1}
            default:
                return state;
    }
} */

//export default는 한개만 내보낼수있고 불러오는 방식도 다르다
export default counter;