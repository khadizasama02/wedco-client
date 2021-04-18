import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Sidebar/Sidebar";


const AddService = () => {
  const {register, handleSubmit,formState: { errors },} = useForm();
  const [imageUrl,setImageUrl]= useState(null)
  const onSubmit = (data) => {
      const eventData = {
          name: data.name,
          description:data.description,
          price:data.price,
          imageUrl: imageUrl
      };
      const url = `http://localhost:5055/addService`;

      console.log(eventData)
      fetch(url,{
          method: 'POST',
          headers:{'Content-Type': 'application/JSON'},
          body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response',res))
    };
  const handleImageUpload = (e)=>{
      const imageData = new FormData();
      imageData.set('key', '3b7eb1320c5be7d2efd4c251990fe44d');
      imageData.append('image', e.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
       setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
//    console.log(e.target.files[0]);
  }
  return (
    <div class="row">
      <div class="col-md-4">
        
      <Sidebar></Sidebar>
      </div>
      <div class="col-md-8" style={{ marginTop: "100px"}}>
     <div class="card p-5">
       <h4>ADD SERVICE</h4>
     <form onSubmit={handleSubmit(onSubmit)}>
        <h6>Package Name</h6>
        <input placeholder="package name" {...register("name")} />
        <br />
        <br />
        <h6> Package Description</h6>
        <input
          type="text"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <br />
        <br />
        <h6>price</h6>
        <input
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <br />
        <br />
        <input
          type="file"
          onChange={handleImageUpload}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <br/>
        <input type="submit" />
      </form>
     </div>
      </div>
    </div>
  );
};

export default AddService;
