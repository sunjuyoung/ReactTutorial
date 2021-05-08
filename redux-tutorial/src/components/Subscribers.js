import React from 'react';
import {connect}from 'react-redux'
import {addSubscriber} from '../redux/index';

const Subscribers = ({count,addSubscriber}) => {
    return (
        <div className="items">
            <p>구독자수 : {count}</p>
            <button onClick={()=>addSubscriber()}>구독하기</button>
        </div>
    );
};
/* connect() Parameters#
connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object */
const mapStateToProps = ({subscribers})=>{
    return {
        count:subscribers.count
    }
}

/* const mapDispatchToProps = (dispatch)=>{
    return {
        addSubscriber : ()=>dispatch(addSubscriber())
    }
} */

const mapDispatchToProps ={
    addSubscriber
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscribers);