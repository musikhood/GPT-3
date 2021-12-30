import React from 'react';
import './article.sass';

export default function Article({imgUrl,date,title}) {
  return (
    <div className='gpt3__blog-container-article'>
      <div className='gpt3__blog-container-article-image'>
        <img src={imgUrl} alt="blog image"/>
      </div>
      <div className='gpt3__blog-container-article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}


