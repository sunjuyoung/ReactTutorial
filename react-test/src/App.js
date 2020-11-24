import React from 'react';
import ValidationSample from './ValidationSample';
import ScrollBoxRef from './ScrollBoxRef'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ValidationSample />
      <div>
        {/* 컴포넌트에 ref달고 내부 메서드 사용 */}
      <ScrollBoxRef ref={(ref)=>this.ScrollBox=ref} />
      <button onClick={()=>this.ScrollBox.scrollToBottom()}>맨밑으로</button>
      <button onClick={()=>this.ScrollBox.scrollToTop()}>위로</button>
      </div>
    </div>
    );
  }

}


export default App;
