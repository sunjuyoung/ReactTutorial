import React from 'react';
import Counter1 from '../components/Counter1';
import {connect} from 'react-redux';
import {increase,decrease} from '../modules/Counter1'

const CounterContainer1 = ({number,increase,decrease}) => {
    return (
        <div>
            <Counter1 number={number}onDecrease={decrease} onIncrease={increase}/>
        </div>
    );
};




export default connect(state=>({
    number:state.counter1.number
}),
{
    increase,
    decrease
})(CounterContainer1);