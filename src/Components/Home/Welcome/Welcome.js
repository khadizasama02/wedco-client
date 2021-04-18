import React from "react";
import "./Welcome.css";
import welcome from "../../../images/welcome.jpg";
import service from "../../../images/service.png";
import experience from "../../../images/experience.png";
import hour from "../../../images/24-hours .png";
const Welcome = () => {
  return (
    <section class="welcome-brand" style={{ height: "800px" }}>
      <h1
        class="text-center fst-italic"
        style={{ marginTop: "100px", color: "#58B19F", fontStyle: "italic" }}
      >
        Welcome to our {" "} 
        <span
          style={{ fontFamily: "Dancing Script,  cursive", color:"#079992"  }}
        >
           WedCo
        </span>
      </h1>
      <h4
        class="text-center "
        style={{ color: "#58B19F", fontStyle: "italic" }}
      >
        The Most Creative Wedding Planner
      </h4>
      <div class="row mt-3">
        <div class="col-md-6" style={{ marginTop: "20px" }}>
          <img src={welcome} class="image-style" />
        </div>
        <div class="col-md-6" style={{ marginTop: "100px" }}>
          <ul style={{ color: "#58B19F", fontStyle: "italic" }}>
            <div style={{ borderBottom: "1px solid #38ada9"}}>
              <div class="d-flex justify-content-start">
                <img src={service} style={{ width: "50px",}} class="" />
                <h5>We Bring Quality Services</h5>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <p>
                  Experience in corporate events, hospitality and wedding
                  planning is certain to make your wedding memorable.
                </p>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #38ada9",marginTop: "50px"}}>
              <div class="d-flex justify-content-start">
                <img src={hour} style={{ width: "50px" }} class="" />
                <h5>Offers 24/7 Quick Support</h5>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <p>
                  With years of services in the event industry, Wedco is a
                  wedding planner stands on a stronger base with.
                </p>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #38ada9" ,marginTop: "50px"}}>
              <div class="d-flex justify-content-start">
                <img src={experience} style={{ width: "50px" }} class="" />
                <h5>Experiance & Talented</h5>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <p>
                  We assure a wedding that is stress-free, relaxed and with
                  enjoyable & the way a destination wedding should be!
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
