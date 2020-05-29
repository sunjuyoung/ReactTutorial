import {createStore} from 'redux';



//UI관리,별도의 라이브러리 사용하지 않기때문에 DOM직접 수정
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');


//상태에 변화를 주는 액션 , 이름 정의
const TOGGLE_SWITCH='TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수
const toggleSwitch=()=>({type:TOGGLE_SWITCH});
const increase = (difference)=>({type:INCREASE,difference});
const decrease = ()=>({type:DECREASE});

//초깃값 설정
const initialState={
    toggle:false,
    counter:0
};


//state가 undefined일때는 initialState를 기본값으로 사용
function reducer(state = initialState, action){
    console.log("reducer");
    //action.type에 따른 다른 작업을 처리함
    switch(action.type){
        case TOGGLE_SWITCH:
            return{
                ...state,//불변성 유지를 한다
                toggle:!state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter:state.counter+action.difference
            };
        case DECREASE:
            return{
                ...state,
                counter:state.counter -1
            };
            default:
            return state;

    }
}

//스토어 만들기
const store = createStore(reducer);

const render=()=>{
    console.log("render");
    const state = store.getState(); //현재 상태를 불러온다
    //토글처리
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }

    //카운터처리
    counter.innerText=state.counter;
}
render();
store.subscribe(render);

divToggle.onClick=()=>{
    store.dispatch(toggleSwitch());
};
btnIncrease.onClick=()=>{
    store.dispatch(increase(1));

}
btnDecrease.onClick=()=>{
    store.dispatch(decrease());
}