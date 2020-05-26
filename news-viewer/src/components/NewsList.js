import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Newsitem from './Newsitem';
import Axios from 'axios';
import usePromise from '../lib/usePromise';


const NewsListBlock = styled.div`
    
`

/* const sampleArticle ={
    title:'제목',
    description:'내용',
    url:'www.naver.com',
    urlToImage:'https://via.placeholder.com/160'
} */

const NewsList = ({category}) => {
   
    const [loading,response,error] = usePromise(()=>{
        const query = category === 'all'? '':`&category=${category}`;
        return Axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=`, 
        {crossDomain: true},
        {
           headers: { 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials':true,}
         })  
    },[category])




    /* const [loading,setLoading] = useState(false);
     const [articles,setArticles] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try{
                const query = category === 'all'? '':`&category=${category}`;
                const response  =  await Axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6eed2a00335a4926a18d0f18829fb856`, 
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
    },[category]);

        if(!articles){
        return null;
    }
 */



    if(loading){
        return <NewsListBlock>대기중</NewsListBlock>
    }
    if(!response){
        return null;
    }
    if(error){
        return <NewsListBlock>에러발생</NewsListBlock>

    }
    const {articles} = response.data;

    
    return (
        <NewsListBlock>
            {articles.map(article=>(
                <Newsitem  key={article.url}article={article} />
            ))}
        </NewsListBlock>    
    );
};

export default NewsList;