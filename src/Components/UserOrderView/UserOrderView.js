import React from 'react';

const UserOrderView = ({userOrder}) => {
    console.log(userOrder);
    // console.log(props);
    // const {booking,displayName,email}=props.userOrder;
    return (
        <tr>
      
        <td>{userOrder.displayName}</td>
        <td>{userOrder.email}</td>
        <td>{userOrder.booking.name}</td>
        <td>{<button class="btn button">not selected</button>}</td>
       
  
      </tr>
    );
};

export default UserOrderView;