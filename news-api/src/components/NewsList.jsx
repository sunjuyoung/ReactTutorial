import React,{useState,useEffect} from 'react';
import './NewsList.css';
import NewsItem from './NewsItem';
import axios from 'axios';

const sampleArticle={
    title:'제목',
    description:'내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
    url:'https://google.com',
    urlToImage:'https://via.placeholder.com/160'
}

const NewsList = () => {
    const [article,setArticle] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=');
                setLoading(true);
                setArticle(response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

       fetchData();
    },[]);

    if(loading){
        return <div>대기중...</div>
    }
    if(!article){
        return null;
    }

    return (
        <div className="newsListBlock">
            {article.map(article=>(
               <NewsItem article={article} key={article.url}/>
            ))}
           
            
        </div>
    );
};

export default NewsList;