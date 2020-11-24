import React from 'react';
import './NewsItem.css'

const NewsItem = ({article}) => {
    const {title,description,url,urlToImage} = article;
    return (
        <div className="newsItemBlock">
            {urlToImage &&(
                <div className="thumbnail">
                    <a href={url}><img src={urlToImage} alt="thumbnail"/></a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url}>{title}</a>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;