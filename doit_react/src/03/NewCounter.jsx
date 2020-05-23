import React, { Component } from 'react';

class NewCounter extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.increaseCount = this.increaseCount.bind(this);
    }


    //변경된 프로퍼티값으로 state값을 갱신
    static getDerivedStateFromProps(props,state){
        const {count} = props;
        return{
            //프로퍼티에서 전달된 count 값 보관
            count,
            newCount:count === state.count
            ? state.newCount : count,
        };
    }

    increaseCount(){
        this.setState(({newCount})=>({
            newCount : newCount+1
        }))
    }
    render() {
        return (
            <div>
                 <span>카운트 : {this.state.newCount}</span>
                <button onClick={this.increaseCount}>+1</button>
            </div>
        );
    }
}

export default NewCounter;