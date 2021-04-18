import React, { useEffect, useState } from 'react';

import ImageCard from '../ImageCard/ImageCard';
import imageData from '../FakeData/FakeData.json'




const ImageGallery = () => {
    const [image,setImage] = useState([]);
    useEffect(()=>{
        setImage(imageData);
        console.log(imageData);
    },[])
    return (
      <section class="container text-center" style={{height:'1200px',marginTop: "100px", color: "#58B19F", fontStyle: "italic" }}>
           <h1 style={{color:"#079992"}}>Moments Gallery</h1>
           <h4>We Make Your Moments Rememberable</h4>
           <p>We are an artist to create the best memories for our clients and couples of their fairy tale best wedding saga forever.</p>
       <div class="row " >
      
        {
            image.map(image=><ImageCard image={image}></ImageCard>)
        }
       </div>
       <button class="btn button" >SEE MORE</button>
      </section>
    );
};

export default ImageGallery;