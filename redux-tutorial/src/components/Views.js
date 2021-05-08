import React ,{useState}from 'react';
import {connect}from 'react-redux'
import {addView} from '../redux';

const Views = ({count,addView}) => {
    const [number,setNumber] = useState(1);
    return (
        <div className="items">
            <p>조회 수 : {count}</p>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick={()=>addView(number)}>조회하기</button>
        </div>
    );
};
/* connect() Parameters#
connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object */
const mapStateToProps = ({views})=>{
    return {
        count:views.count
    }
}

/* const mapDispatchToProps = (dispatch)=>{
    return {
        addSubscriber : ()=>dispatch(addSubscriber())
    }
} */

const mapDispatchToProps ={
    addView: (number)=>addView(number)
}

export default connect(mapStateToProps,mapDispatchToProps)(Views);