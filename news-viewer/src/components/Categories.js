import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import './Categories.scss';

const categories =[
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'tech',
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
        name: 'sport',
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

const Categories = ({onSelect,catetory}) => {
  
    return (
       <CategoriesBlock>
           {categories.map(c=>(
               <div className={cn('Category',`${catetory===c.name? 'active':''}`)} key={c.name} active={catetory===c.name? "true":"false"} onClick={()=>onSelect(c.name)}>{c.text}</div>
           ))}
       </CategoriesBlock>
    );
};

export default Categories;