import React from 'react';
import coupleGallery from '../../../images/couplegallery.jpg'

const ImageCard = ({image}) => {
    return (
          <div >
              <div class="col-md-3 m-2 " >
              
              <img src={image.image}  style={{width:"300px"}}alt=""/>
              
               
               </div> 
          </div>
                     
       
    );
};

export default ImageCard;