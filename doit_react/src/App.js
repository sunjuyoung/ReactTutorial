import React from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';

function App() {
  return (
    <div className="body">
      <TodaysPlan></TodaysPlan>
      <PropsComponent name="하이"></PropsComponent>
      <ChildComponent boolValue={true} 
          numValue={1}
          arrayValue={[1,2,3]}
          objValue={{name:'제목',age:30}}
          nodeValue={<h1>노드</h1>}
          funcValue={()=>{return "hi"}}></ChildComponent>
          <hr></hr>
          <BooleanComponent bored/>
          <BooleanComponent /> {/* undefined false는 조건문에서 동일하게 취급 */}

          <div>
            <ChildComponent2  objValue={{age:'20살'}}  requiredStringValue="문자"> 자식노드</ChildComponent2>
          </div>
          
    </div>
  );
}

export default App;
