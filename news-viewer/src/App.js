import React,{useState, useCallback} from 'react';
import Axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';


const App = () => {
  const [data,setData] = useState(null);
  const onClick=()=>{
    Axios.get('https://openapi.naver.com/v1/search/news.json',{crossDomain: true}, {
      headers: { 'X-Naver-Client-Id': '','X-Naver-Client-Secret':'','Access-Control-Allow-Origin': "*"}
    });
  };

  const onClickAsync = async()=>{
    try{
       const response  =  await Axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=', 
     {crossDomain: true},
     {
        headers: { 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials':true,}
      })  
        setData(response.data.articles);
     
    }catch(e){
      console.log(e);
    }
  }

  const [catetory,setCagetory] = useState('all');
  const onSelect = useCallback(catetory=>{
    setCagetory(catetory);

  },[])


  return (

   
    <div>
      <div>
        <button onClick={onClickAsync}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)}  />}
      <hr></hr>
      <div>
      <Categories catetory={catetory} onSelect={onSelect}/>
      <NewsList /> 
   </div>
    </div>
  );
};

export default App;