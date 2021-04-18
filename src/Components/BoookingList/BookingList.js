import React from "react";
import { Link } from 'react-router-dom';

const BookingList = (props) => {
    const {name,description,imageUrl,_id} = props.bookingList;
    
  return (
    <div>
      <div class="card w-50 mx-auto">
        <h4 class="card-header text-center">Package Detail</h4>
        <img src={imageUrl} class="card-img-top" alt="..." style={{height:"500px"}}></img>
        <div class="card-body text-center">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
           {description}
          </p>
         <button class="btn button">
             <Link to={`/order/${_id}`}>Confirm</Link>
         </button>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
