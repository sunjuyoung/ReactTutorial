import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Newsitem from './Newsitem';
import Axios from 'axios';


const NewsListBlock = styled.div`
    
`

const sampleArticle ={
    title:'제목',
    description:'내용',
    url:'www.naver.com',
    urlToImage:'https://via.placeholder.com/160'
}

const NewsList = () => {
    const [articles,setArticles] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try{
                const response  =  await Axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=', 
                {crossDomain: true},
                {
                   headers: { 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials':true,}
                 })  
                 setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    if(loading){
        return <NewsListBlock>대기중</NewsListBlock>
    }
    if(!articles){
        return null;
    }
    


    return (
        <NewsListBlock>
            {articles.map(article=>(
                <Newsitem  key={article.url}article={article} />
            ))}
        </NewsListBlock>    
    );
};

export default NewsList;