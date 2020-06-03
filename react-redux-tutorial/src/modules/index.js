import {combineReducers} from 'redux';
import counter1 from './Counter1';
import todos1 from './todos1';


//루트 리듀서
//createStore함수 사용하여 스토어 만들때 리듀서를 하나만 사용해야한다
//때문에 하나로 합쳐준다
//파일 이름을 index로 해주면 나중에 불러올때 디렉터리 이름까지만 입력하여 불러올수있다.
const rootReducer = combineReducers({
    counter1,
    todos1
})

export default rootReducer;