import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import './Categories.scss';
import {NavLink} from 'react-router-dom';

const categories =[
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'technology',
        text:'기술'
    },
    {
        name:'entertainment',
        text:'엔터테이먼트'
    },
    {
        name: 'health',
        text:'건강'
    },
    {
        name: 'sports',
        text:'스포츠'
    },
    {
        name: 'science',
        text:'과학'
    },
];

const CategoriesBlock = styled.div`
    display:flex;
    padding :1rem;
    width : 768px;
    margin:0 auto;
`;
const Category = styled(NavLink)`
    font-size: 1.12rem;
    cursor: pointer;
    white-space: pre;
    padding-bottom: 0.25rem;
    color:inherit;
    text-decoration: none;
`


const Categories = ({onSelect,catetory}) => {
  
    return (
       <CategoriesBlock>
 {/*           {categories.map(c=>(
               <div className={cn('Category',`${catetory===c.name? 'active':''}`)} key={c.name} active={catetory===c.name? "true":"false"} exact={c.name==='all'} to={c.name === 'all'? '/': `/${c.name}`}>{c.text}</div>
           ))} */}
           {categories.map(c=>(
               <Category
               className={cn('Category',`${catetory===c.name? 'active':''}`)}
               key={c.name}
               exact={c.name==='all'}
               to ={c.name==='all'?'/':`/${c.name}`}>{c.text}</Category>
           ))}
       </CategoriesBlock>
    );
};

export default Categories;