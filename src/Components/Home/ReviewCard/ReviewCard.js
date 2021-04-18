import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div class="col-md-4">
      <div class="card  mx-auto shadow bg-body rounded" style={{height:"200px",marginLeft:"50px",width:"20rem"}}>
      
        <div class="card-body">
          <h4 class="card-title" style={{color:"#079992"}}>{review.name}</h4>
          <p class="card-text">
           {review.review}
          </p>
          
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;