import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const[review,setReview] = useState([]);
    useEffect(() => {
        fetch("https://gentle-waters-37437.herokuapp.com/review")
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, []);
      console.log(review);
    return (
        <section style={{height:"700px"}}>
                  <h1 class="text-center" style={{color:"#079992"}}>What our beautiful client think about us</h1>
          <div class="row mt-5">
          {
               review.map(review=><ReviewCard review={review}></ReviewCard>)
           } 
          </div>
          </section>
    );
};

export default Review;