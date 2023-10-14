import { Outlet } from "react-router-dom";
import image4 from'./images/image-top-laptops.jpg';
import image2 from './images/image-gaming-growth.jpg';
import image3 from './images/image-retro-pcs.jpg';
const Home = () => {

  return ( 
<div  className="crazy">
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
           
<article className="ee" >
            <div> <img src={image3} alt='image3'/></div>
            <div>
            <h1> Our Feauterd article </h1>
            <p> What happens when old OCs given modren upgrade? </p>
            </div>
            </article>
            <article >
            <div className='part2'>
              <img src={image2} alt='image2'/>
            </div>
            <div> 
            <h2> Reviving Retro PCs </h2>
            <p> What happens when old OCs given modren upgrade? </p>
            </div>
            </article>
            <article className="v">
            
            <div className="part3"> 
            <img src={image4} alt='image4'/>
            </div>
            <div >
            <h2> Tech latest</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis alias magni 
             praesentium </p>
             </div>
             </article>
             <article >
            <div className='part2'>
              <img src={image2} alt='image2'/>
            </div>
            <div> 
            <h2> Reviving Retro PCs</h2>
            <p> What happens when old OCs given modren upgrade? </p>
            </div>
            </article>




<Outlet/>
</div>

   );
}
 
export default Home;