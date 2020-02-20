import React, {Component} from 'react';

class Counter extends Component{

    //컴포넌트의 생성자 메서드, 클래스형 컴포넌트에서 생성자를 작성할때는 반드시 super를 호출해 주어야 합니다.
    //이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 component클래스가 지닌 생성자 함수를 호출해줍니다.
    constructor(props){
        super(props);
        //state의 초깃값 설정
        this.state={
            number:0,
            fixNumber : 0,
            number1:0,
            number2:0,
            number3:0
        };
    }


    render(){
        //render함수에선 현재 state를 조회할때는 this.state를 조회하면된다
        //
        const {number,fixNumber,number1,number2,number3} = this.state;
       
        return(
            <div>
                <h2>{number}</h2>
        <h2>바뀌지 않는 값: {fixNumber}</h2>
                <button onClick={()=>{this.setState({number:number +1});}}>버튼</button>
                <button onClick={()=>{this.setState({number :  this.state.number + 1})}}>버튼</button>
                <hr></hr>
                <h1>{number1}</h1>
                <button onClick={()=>{
                    this.setState({number1:number1 +1})
                }}>넘버1</button>
                <h2>{number2}</h2>
                <button onClick={()=>{
                    this.setState(prevState=>({
                        number2 : prevState.number2 + 1
                    }));
                }}>넘버2</button>
                <h2>{number3}</h2>
                <button onClick={()=>{
                    this.setState({number3 : number3 +1},
                        ()=>{
                            alert("왓떠퍽");
                        })
                }}>넘버3</button>


            </div>


        );
    }
}

export default Counter;