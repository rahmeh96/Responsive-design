import { useState } from 'react';
import image from './images/image-web-3-desktop.jpg';
import './index.css';
const Middle = () => {
    const [isShow, setIsShow]=useState(true);
    const text = "we dive into the next evolution of the web that claims to putthe powe of the platforms back into the hands of the people,But is it really fullfiling its Promise?e ive nto the next evolution of the web that claims to putthe powe of the platforms back into the hands of the people,But is it really fullfiling its Promise?wento the next evolution of the web that claims to putthe powe of the platforms back into the hands of the people"
const handleClick=()=>{
   setIsShow(!isShow);
}
    return ( 
        <>
    <div className='contain' >
<article className='primary'>
          <img src={image} alt="image4"/>
          <h1> The Bright Future Of Web 3.0 ?</h1>
          <div className='center'>
          <p> { isShow ? text : `${text.substring(0,43)}`}
              </p><br/> 

    </div>
    <button onClick={handleClick}> {isShow ? 'show less' : 'show more'}</button>
    
     </article>
     </div>
        
<div className='content'> 
<h1 > News </h1> 
<div className='box1'>
<h4 > Hydrogen VS Electric cars</h4>
<p > Will hydrogen fueled-cars ever catch-up to EVs?</p>

</div>
<div className='box1'>
<h4 > The downsides of AI artistry</h4>
<p > What are the possible adverse effects of on-demand AI image generation?</p>

</div>
<div className='box'>
<h4 > Is VC Funding Drying Up?</h4>
<p > Private Funding by VC Firm id down 50% YOY.We take a look at what that means</p>
</div>
</div>
</>
     );
}
 
export default Middle;