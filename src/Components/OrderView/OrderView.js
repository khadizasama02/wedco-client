import React from 'react';

const OrderView = (props) => {
    console.log(props);
    const {booking,displayName,email}=props.order;
    console.log(props.order);
    return (
        <div >
             <tr>
      
      <td>{displayName}</td>
      <td>{email}</td>
      <td>{booking.name}</td>
      <td>{booking.price}</td>
      <td>{<button class="btn button">Update</button>}</td>
     

    </tr>
        </div>
    );
};

export default OrderView;