import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent1';
import Counter from './Counter';
import TOC from './TOC';
import Say from './Say';
import Content from './Content';
import EventPractice from './EventPractice';
import EventPractice02 from './EventPractice02';
import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component {

  state = {
    subject:{title :'WEB' , sub:'World Wid Web'},
    mode :'welcome',
    welcome:{title:'Welcome',desc:'hello react!'},
    contents :[
      {id : 1, title : 'HTML', desc : 'HTML IS EASY~'},
      {id : 2, title : 'JSP', desc : 'HTML IS EASY~'},
      {id : 3, title : 'JAVASCRIPT', desc : 'HTML IS EASY~'}
    ],
    color:'#000000'
  }

  handleColor=()=>{
    this.setState({
      color:getRandomColor()
    })
  }

  

  render(){
   var _title, _desc= null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    } 

    return(
      <div>
       
        <h1 className="react"> hi</h1>
        <h1><MyComponent favoriteNumber={1}> 리액트</MyComponent></h1>
        <h2><Counter /></h2>
        <hr></hr>
          <div>
           {/*  <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
           <h1><a href="/" onClick={(e)=>{
              console.log(e);
              e.preventDefault();
              this.setState({mode : "read"})
             
           }}>{this.state.subject.title}</a></h1>
            <TOC data={this.state.contents}></TOC>
            <Say></Say>
            <hr></hr>
            <Content title={_title} desc={_desc}></Content>
          </div>

{/*           <div>
          <h1>이벤트 연습2</h1>
          <EventPractice02 />
          </div>
          
          <div>
          <h1>이벤트 연습</h1>
          <EventPractice />
          </div> */}
     {/*    <div>
          <ValidationSample></ValidationSample>
        </div>

        <div>
          <IterationSample></IterationSample>
        </div> */}
        <button onClick={this.handleColor}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>

      </div>
    );
    

  }
}





export default App;
