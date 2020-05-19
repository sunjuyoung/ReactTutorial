import React, { Component } from 'react';
import Counter2 from './03/Counter2';
import NewCounter from './03/NewCounter';
import ListEx from './03/ListEx';


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

  /* resetCount(){
    this.setState(({count})=>({
      count:count + 10
    }))
  } */
  render() {
    return (
      <div>
         <Counter2 count={this.state.count} onAdd={this.increaseCount} onReset={this.resetCount}/>
       
      </div>



    );
  }
}


export default App;