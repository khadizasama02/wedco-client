import React, { useContext } from 'react';
import './Service.css'
import { UserContext } from '../../../App';
import ServiceCard from '../ServiceCard/ServiceCard';


const Service = () => {
  
    const [service,,,] = useContext(UserContext)
    return (
      <section style={{height:"800px", color: "#58B19F", fontStyle: "italic"}} class="service-style">
        <div class="title-style">
        <h3 class="text-center" >our wedding services</h3>
          <h1 class="text-center" style={{color:"#079992"}}>We Provide The Best Services</h1>
          <p class="text-center">Our efforts will help to have a better approach to the planning phase, help build a better vision to make it entertaining & memorable</p>
        </div>
       
         <div class="row container mx-auto">
         {
              service.map(service=><ServiceCard service={service}></ServiceCard>)
          }
         </div>
        
      </section>
    );
};

export default Service;