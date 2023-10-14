import './index.css';
import image4 from'./images/image-top-laptops.jpg';
import image2 from './images/image-gaming-growth.jpg';
import image3 from './images/image-retro-pcs.jpg';
const Section = () => {
    return ( 
        <div className="footer">
           <article>
            <div> <img src={image3} alt='image3'/></div>
            <div>
            <h2> Reviving Retro PCs</h2>
            <p> What happens when old OCs given modren upgrade? </p>
            </div>
            </article>
            <article>
            <div className='part2'>
              <img src={image2} alt='image2'/>
            </div>
            <div> 
            <h2> Reviving Retro PCs</h2>
            <p> What happens when old OCs given modren upgrade? </p>
            </div>
            </article>
            <article>
            <div className='part3'>
            
            <img src={image4} alt='image4'/>
            </div>
            <div>
            <h2> Tech latest</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis alias magni 
             praesentium </p>
             </div>
             </article>
</div>
       
     );
}
 
export default Section;