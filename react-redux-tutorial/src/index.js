import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; //스토어 생성
import {Provider} from 'react-redux'; //provider컴포넌트 사용하여 리덕스 적용
import rootReducer from './modules';
import {composeWithDevTools} from 'redux-devtools-extension'; //redux devtools

const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render( <Provider store={store}><App /></Provider>,document.getElementById('root'));


serviceWorker.unregister();
