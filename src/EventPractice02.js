import React, { Component } from 'react';

class EventPractice02 extends Component {
    state={
        message:'',
        username:''
    }

    handleClick=()=>{
        alert(this.state.username + ":" + this.state.message);

    }

    //객체안에서 [] 감싸면 그안에 넣은 래퍼런스가 가리키는 실제값이 key 값으로 사용
    handleChange=(e)=>{
        console.log(e.target.name);
        console.log(e.key);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleKeyPress= (e)=>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <input type="text" name="message" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                <input type="text" name="username" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}> button </button>
                
            </div>
        );
    }
}

export default EventPractice02;