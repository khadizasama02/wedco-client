import React from 'react';
import './Welcome.css'
import welcome from '../../../images/welcome.jpg';
import service from '../../../images/service.png'

const Welcome = () => {
    return (
       
        <section class="welcome-brand" style={{height:'800px'}}>
             <h1 class ="text-center fst-italic" style={{marginTop:'100px',color:'#58B19F',fontStyle:'italic'}}>Welcome to our <span style={{fontFamily: 'Dancing Script,  cursive',color:'#9AECDB'}}>WedCo</span></h1>
             <h4 class ="text-center " style={{color:'#58B19F',fontStyle:'italic'}}>The Most Creative Wedding Planner</h4>
             <div class="row mt-3">
            <div class="col-md-6" style={{marginTop:'20px'}}>
             <img src={welcome} class="image-style"/>
            </div>
            <div class="col-md-6" style={{marginTop:'100px'}}>
             <ul>
                <div class="d-flex justify-content-start" >
                <img src={service} style={{width:'50px'}} class=""/>
                <p>we bring quality services</p>
                </div>
             </ul>
            </div>
            </div>
            
        </section>
    );
};

export default Welcome;