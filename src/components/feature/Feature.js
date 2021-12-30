import React from 'react';
import './feature.sass';

export default function Feature({title,text}) {
  return (
    <div className='gpt3__features-container-feature'>
      <div className='gpt3__features-container-feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container-feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
}


