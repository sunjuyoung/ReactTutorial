import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props){
        super(props);


       this.state={
           count : props.count,
       }


        this.increaseCount = this.increaseCount.bind(this);
    }


    increaseCount=()=>{
       
/*         const {count} = this.state;

        this.setState({
            count:count+1
        }) */

        this.setState(({count})=>({
            count : count +1
        }));

    }

    render() {
        
        return (
            <div>
                <span>카운트 : {this.count}</span>
                <button onClick={this.increaseCount}>+1</button>
            </div>
        );
    }
}

export default Counter;