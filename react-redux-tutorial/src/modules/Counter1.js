//액션 타입 정의
const INCREASE = 'counter1/INCREASE';
const DECREASE = 'counter1/DECREASE';

//액션 생성 함수 만들기
export const increase = ()=>({type:INCREASE})
export const decrease = ()=>({type:DECREASE})

//초기 상태
const initialState ={
    number:0
}

//리듀서 함수
function Counter1(state=initialState,action){

    switch(action.type){
        case INCREASE:
            return{
                number:state.number+1
            }
        case DECREASE:
            return{
                number:state.number-1
            }
        default:
            return state;

    }
}

export default Counter1;