import React,{useState, useCallback} from 'react';
import Axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import {Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';


const App = () => {
  /* const [data,setData] = useState(null);
  const onClick=()=>{
    Axios.get('https://openapi.naver.com/v1/search/news.json',{crossDomain: true}, {
      headers: { 'X-Naver-Client-Id': '','X-Naver-Client-Secret':'','Access-Control-Allow-Origin': "*"}
    });
  };

  const onClickAsync = async()=>{
    try{
       const response  =  await Axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=6eed2a00335a4926a18d0f18829fb856', 
     {crossDomain: true},
     {
        headers: { 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials':true,}
      })  
        setData(response.data.articles);
     
    }catch(e){
      console.log(e);
    }
  } */

  const [catetory,setCagetory] = useState('all');
  const onSelect = useCallback(catetory=>{
    setCagetory(catetory);

  },[])


  return (
    <div>
     {/*  {data && <textarea rows={7} value={JSON.stringify(data,null,2)}  />} */}
   {/*    <Categories catetory={catetory} onSelect={onSelect}/>
      <NewsList category={catetory}/>  */}
      <Route path="/:category?" component={NewsPage} />
    </div>
  );
};

export default App;