import React,{useState,useEffect} from 'react';
import './NewsList.css';
import NewsItem from './NewsItem';
import axios from 'axios';



const NewsList = ({category}) => {
    const [article,setArticle] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const query = category=== 'all'? '' : `&category=${category}`;
                const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b255408ea1914b14b3164fc60115ac82`);
                setLoading(true);
                setArticle(response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

       fetchData();
    },[category]);

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