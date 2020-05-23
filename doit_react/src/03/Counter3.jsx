import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter3 extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }



        this.increase = this.increase.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }


    increase(){
        this.setState(({count})=>({
            count:count+1
        }))
    }

    resetCount(){
        this.setState({count :0})
    }


    render() {
        return (
            <div>
                현재 카운트 : {this.props.count}
                <button onClick={this.increase} onMouseOut={this.resetCount}>+1</button>
            </div>
        );
    }
}

Counter3.propTypes={
    onAdd : PropTypes.func,
    count : PropTypes.number,

};

export default Counter3;