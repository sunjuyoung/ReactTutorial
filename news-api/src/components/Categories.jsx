import React,{useState,useCallback} from 'react';
import './Categories.css';


const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비즈니스'
    },
    {
        name:'entertainment',
        text:'엔터'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
]


const Categories = ({onSelect}) => {
    const [sCategory,setScategory] = useState('all');
    
    const test =useCallback((e)=>{
        setScategory(e);
    },[]);

    return (
        <div className="categories">
            {categories.map(c=>(
                <div onClick={()=>onSelect(c.name)} className="category" key={c.name}>{c.text}</div>
            ))}
        </div>
    );
};

export default Categories;