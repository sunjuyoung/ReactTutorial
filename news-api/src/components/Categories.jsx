import React,{useState,useCallback} from 'react';
import './Categories.css';
import {NavLink} from 'react-router-dom';


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


const Categories = () => {
    return (
        <div className="categories">
            {categories.map(c=>(
                <NavLink exact={c.name === 'all'}
                     to={c.name ==='all'? '/': `/${c.name}`}
                className="category" key={c.name}>{c.text}</NavLink>
            ))}
        </div>
    );
};

export default Categories;