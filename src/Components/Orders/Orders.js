import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Orders = () => {
    const {_id} = useParams();
    console.log(_id);
    const [service, ,loggedInUser,]= useContext(UserContext);
    const booking= service.find(service=>service._id === _id);
    console.log(booking);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const orderDetail = {
            ...loggedInUser,booking,orderDetail:data,orderTime:new Date()
        }
        fetch('http://localhost:5055/addOrder',{
            method:'POST',
            headers:{
                'Content-Type':'application/JSON'
            },
            body:JSON.stringify(orderDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('order placed successfully')
            }
        })
    };
    return (
        <div>
            <h1>this is order page</h1>
             <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Name</h4>
      <input type="text" defaultValue={loggedInUser.displayName} {...register("name")} />
      
     <h4>Email</h4>
      <input type="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
      <h4>Address</h4>
      <input type="text" placeholder="enter your address"{...register("Address", { required: true })} />
      <h4>Phone</h4>
      <input type="text" placeholder="enter your phone number"{...register("Address", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
        </div>
    );
};

export default Orders;