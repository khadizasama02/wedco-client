import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
  return (
    <div class="col-md-4 ">
      <div
        class="card  mx-auto shadow bg-body rounded text-center"
        style={{ height: "600px", marginLeft: "50px", width: "20rem" }}
      >
        <div class="inner">
          <img
            src={service.imageUrl}
            class="card-img-top"
            alt="..."
            style={{ height: "300px" }}
          />
        </div>
        <div class="card-body">
          <h4 class="card-title" style={{ color: "#079992" }}>
            {service.name}
          </h4>
          <p class="card-text">{service.description}</p>
          <p>{service.price}</p>
          <button class="btn button">
            <Link to={`/book/${service._id}`}>BUY NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
