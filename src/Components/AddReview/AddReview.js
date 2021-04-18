import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


const AddReview = () => {
const {register, handleSubmit,formState: { errors },} = useForm();
const onSubmit = (data) => {
    const reviewData = {
        name: data.name,
        review:data.description
       
    };
    const url = `https://gentle-waters-37437.herokuapp.com/addReview`;

    console.log(reviewData)
    fetch(url,{
        method: 'POST',
        headers:{'Content-Type': 'application/JSON'},
        body: JSON.stringify(reviewData)
    })
    .then(res => console.log('server side response',res))
  };

    return (
      
        <div >
         
          <div class="row">
          <div class="col-md-4">
        
        <Sidebar></Sidebar>
        </div>
        <div class="col-md-8" style={{ marginTop: "100px"}}>
       <div class="card p-5">
         <h4>ADD REVIEW</h4>
       <form onSubmit={handleSubmit(onSubmit)}>
          <h6>Client Name</h6>
          <input placeholder="Client Name" {...register("name")} />
          <br />
          <br />
          <h6>Add your review</h6>
          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br/>
          <br/>
          <input type="submit" />
        </form>
       </div>
        </div>
          </div>
      
    </div>
    );
};

export default AddReview;