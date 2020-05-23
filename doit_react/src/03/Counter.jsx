import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {

            //count 초깃값을 프로미터에서 전달된 값으로 한다
            count : props.count,

        };
        this.increaseCount = this.increaseCount.bind(this);
    }

    inncreaseCount(){
        const {count} = this.state;
        
     this.setState({count:count+1})

    }

    render() {
        return (
            <div>
                현재 카운트 : {this.state.count}
                <button onClick={this.increaseCount}>+1</button>
            </div>
        );
    }
}

export default Counter;