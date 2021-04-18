import React from "react";
import './Footer.css'
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";


const Footer = () => {
  return (
    <section class="footer-brand"style={{ height: "600px",color: "#58B19F", fontStyle: "italic" }}>
        <div>
            <h1 class="text-center"> <span
          style={{ fontFamily: "Dancing Script,  cursive", color:"#079992",marginTop:"50px"  }}
        >
           WedCo
        </span></h1>
        </div>
        <div class="row" style={{margin:"100px"}}>
            <div class="col-md-4">
             <h4>Our Address</h4>
             <p>Evanto HQ 24 Fifth st., Los Angeles, USA</p>
            </div>
            <div class="col-md-4">
             <h4>Talk To Expert</h4>
             <p>+1234 567 8910</p>
            </div>
            <div class="col-md-4">
             <h4>Email Us</h4>
             <p>samairasama821@gmail.com</p>
            </div>

        </div>
      <div class="row"style={{margin:"100px"}}>
        <div class="col-md-4">
          <h5>About WedCo</h5>
          <p>
            We’ve delivered fabulous wedding event experiences over the last two
            decades and are now poised to chart out a whole new growth
            story.padding:"5px"
          </p>
          <div class="d-flex justify-content-start">
            <img src={facebook} style={{ width: "30px", padding: "3px" }} />
            <img src={twitter} style={{ width: "30px", padding: "3px" }} />
            <img src={instagram} style={{ width: "30px", padding: "3px" }} />
          </div>
        </div>
        <div class="col-md-4">
          <h5>Our Services</h5>
          <a class="footer-design" href="#">
            <ul>
              <li>User Strategy</li>
              <li>Product Designing</li>
              <li>Marketing Strategy</li>
              <li>It Consultacy</li>
            </ul>
          </a>
        </div>
        <div class="col-md-4">
          <h5>Wedding Planner Faqs</h5>
          <a href="#" class="footer-design" >
            <ul>
              <li>User Strategy</li>
              <li>Product Designing</li>
              <li>Marketing Strategy</li>
              <li>It Consultacy</li>
            </ul>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Footer;
