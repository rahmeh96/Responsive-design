import React from 'react'
import { Outlet } from 'react-router-dom';
import image2 from './images/pexels-cottonbro-studio-3944377.jpg';

export default function News() {
  return (
    <div className='news'>
      <article className='news'>
        <img src={image2} alt='google' className='news'/>
        <p> Welcome to the 9:00 oclock news, we are her to catch you up with the latest news in the world idiots</p>
      </article>
      <article className='news'>
        <img src={image2} alt='google' className='news'/>
        <p> Welcome to the 9:00 oclock news, we are her to catch you up with the latest news in the world idiots</p>
      </article>
      <article className='news'>
        <img src={image2} alt='google' className='news'/>
        <p> Welcome to the 9:00 oclock news, we are her to catch you up with the latest news in the world idiots</p>
      </article>
      <article className='news'>
        <img src={image2} alt='google' className='news'/>
        <p> Welcome to the 9:00 oclock news, we are her to catch you up with the latest news in the world idiots</p>
      </article>
      <article className='news'>
        <img src={image2} alt='google' className='news'/>
        <p> Welcome to the 9:00 oclock news, we are her to catch you up with the latest news in the world idiots</p>
      </article>
     
      
      <Outlet/>
      </div>
  )
}
