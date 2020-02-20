import React, { Component } from 'react';

//메서드 바인딩은 생성자 메서드에 한느 것이 정석
//하지만 새 메서드를 만들 대마다 생성자도 수정하기 때문에 불편
//화살표 함수 형태로 메서드를 정의하면 간단해진다
class EventPractice01 extends Component {
    state = {
        message : ''
    }

    
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            message : e.target.value
        })
    }

    handleClick(){
        alert(this.state.message);
        this.setState({
            message:''
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="text" name="message" placeholder="입력" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>button</button>
            </div>
        );
    }
}

export default EventPractice01;