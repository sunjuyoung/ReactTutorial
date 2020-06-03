import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter ,Route,Switch,Link,NavLink,useParams} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );

}

var contents =[
  {id:1,
  title:'HTML',
description:'HTML ....'},
{id:2,
  title:'JS',
description:'JS ....'},
{id:3,
  title:'REACT',
description:'REACT ....'}
]

function Topic(){
 var params =  useParams();
 var topic_id = params.topic_id;
 var selectTopic={
   title:'Not Found',
   description:'Not Found'
 }
 for(var i=0; i<contents.length; i++){
   if(contents[i].id === Number(topic_id)){
    selectTopic=contents[i];
    break;
   }
 }
  return(
    <div>
      <h3>{selectTopic.title}</h3>
      {selectTopic.description}
    </div>
  );
}

function Topics(){
  var lis = [];
  for(var i =0; i<contents.length; i++){
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>

    </div>
  );

}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );

}

function App(){
  return(
  <div>
  <h1>React Router DOM</h1>
  <ul>
    <li><a href="/">HOME</a></li>
    <li><NavLink exact to="/">HOME</NavLink></li>
    <li><NavLink to="/topics">Topics</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </ul>
  <Switch>
   <Route exact path="/" ><Home></Home></Route>
    <Route path="/topics"><Topics /></Route>
    <Route path="/contact"><Contact /></Route>
    <Route path="/">Not Found</Route>
  </Switch>
  </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
