import React from 'react';
import './App.sass';

import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from './containers'
import {Cta,Brand,Navbar} from './components'

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'></div>
      <Navbar/>
      <Header/>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}


