import React, { Component } from 'react';
import Counter2 from './03/Counter2';
import NewCounter from './03/NewCounter';
import ListEx from './03/ListEx';
import ChildC from './03/ChildC';
import Counter from './03/Counter';
import ScrollSpy from './03/ScrollSpy';
/* import './materialize.css' */
import './sass/materialize.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count :1,
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increaseCount(){
    this.setState(({count})=>({count : count +1}));
  }

  resetCount(){
    this.setState({count :0})
}

  render() {
    return (
      <div>
         <Counter2 count={this.state.count} onAdd={this.increaseCount} onReset={this.resetCount}/>
       
       <h1>머티리얼</h1>
       <nav>
         <div className="nav-wrapper">
           <div>리액트 시작</div>
         </div>
       </nav>
      </div>
      


    );
  }
}


export default App;