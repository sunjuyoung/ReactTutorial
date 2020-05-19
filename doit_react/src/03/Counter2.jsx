import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter2 extends Component {
    constructor(props){
        super(props);
        this.state={
            count: this.props.count,
        }

        this.resetCount = this.resetCount.bind(this);
    }

    resetCount(props){
        this.setState({count :0})
    }


    render() {
        return (
            <div>
                현재 카운트 : {this.props.count}
                <button onClick={()=> this.props.onAdd()} onMouseOut={this.props.onReset}>+1</button>
            </div>
        );
    }
}

Counter2.propTypes={
    onAdd : PropTypes.func,
    count : PropTypes.number,

};

export default Counter2;