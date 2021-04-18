import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserOrderView from '../UserOrderView/UserOrderView';

const UserOrder = () => {
    const[,,loggedInUser,]= useContext(UserContext);
    const[userOrderList,setUserOrderList] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5055/orderByEmail?email=${loggedInUser.email}`)
        .then(res=>res.json())
        .then(data=>setUserOrderList(data))
    },[])
       
            
    return (
        <div class="row">
        <div class="col-md-4">
            <Sidebar></Sidebar>
        </div>
  
        <div class="col-md-8">
        <table class="table table-striped table-hover">
          <thead class="m-5" style={{marginTop:"100px"}}>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>productName</th>
              <th>product price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {userOrderList.map((userOrder) => (
              <UserOrderView userOrder={userOrder}></UserOrderView>
            ))}
          </tbody>
        </table>
  
        </div>
      </div>
    );
};

export default UserOrder;