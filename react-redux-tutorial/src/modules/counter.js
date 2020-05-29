//액션 타입
//대문자로 정의하고 문자열내용은 모듈이름/액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수
export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});

const initialState={
    number :0
};

function counter(state=initialState,action){
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
}

//export default는 한개만 내보낼수있고 불러오는 방식도 다르다
export default counter;