import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message:''
    }




    handleChange=(e)=>{
        console.log(e.target.name);
        this.setState({
            message:e.target.value
        });
    }

    handleClick=()=>{
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

    render() {
    
        return (
            <div>
                <h1>이벤트연습</h1>
                <h2>{this.state.message}</h2>
               
                <input type="text" name="message" placeholder="입력하세요" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>입력</button>
                
            </div>
        );
    }
}

export default EventPractice;