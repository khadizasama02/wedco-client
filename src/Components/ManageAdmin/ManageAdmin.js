import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const ManageAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      const adminData = {
          email: data.email
      }
console.log(data);
      const url = `http://localhost:5055/addAdmin`;

    //   console.log(adminData)
      fetch(url,{
          method: 'POST',
          
          headers:{'Content-Type': 'application/JSON'},
          body: JSON.stringify(adminData)
      })
      .then(res => console.log('server side response',res))
    };
 

  return (
    <div>
      
      <div class="row">
        <div class="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div class="col-md-8" style={{marginTop:"150px"}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>enter Email</h4>
            <input defaultValue="Email" {...register("email")} />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
