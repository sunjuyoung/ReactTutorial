import React from 'react';
import styled from 'styled-components';
import './NewsItem.scss';

const NewsItemBlock = styled.div`
    display:flex;

`

const Newsitem = ({article}) => {
    const {title,description,url,urlToImage} = article;

    return (
        <NewsItemBlock>
            {urlToImage && (<div className="thumbnail">
                <a href={url} target="_blank" rel="noopener noreferer">
                    <img src={urlToImage} alt="thumbnail"></img>
                </a>
            </div>
            )}
            <div className="content">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferer">
                    {title}
                    </a>
                </h2>    
                    <p>{description}</p>             
            </div>

            
        </NewsItemBlock>
    );
};

export default Newsitem;