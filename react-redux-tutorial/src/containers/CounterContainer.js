import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increase,decrease} from '../modules/counter'

const CounterContainer = ({number,increase,decrease}) => {
    return (<Counter number={number} onIncrease={increase} onDecrease={decrease}/>);
};

const mapStateProp = state=>({
    number:state.counter.number,
})

const mapDispatchToProps=dispatch=>({
    //임시함수
    increase:()=>{
        dispatch(increase());
        console.log("증가");

    },
    decrease:()=>{
        dispatch(decrease());
        console.log("감소");
    }
})

export default connect(mapStateProp,mapDispatchToProps)(CounterContainer);