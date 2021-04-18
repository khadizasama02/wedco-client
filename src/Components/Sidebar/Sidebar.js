import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '../../images/technical-support.png';
import admin from '../../images/administrative.png';
import rating from '../../images/rating (1).png';
import order from '../../images/note.png';
import checklist from '../../images/checklist.png';
import { UserContext } from '../../App';

const Sidebar = () => {
    const[,,loggedInUser,setLoggedInUser] =useContext(UserContext);
    const[isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5055/isAdmin?email=${loggedInUser.email}`
            
        )
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])
    return (
        <div style={{ backgroundColor:"#eff3f8",height:"700px"}}>
           
            <h1 style={{fontFamily: 'Dancing Script,  cursive',fontSize:'45px',fontWeight:'bold',color:"#079992"}}>WedCo</h1>
            <div >
              <ul style={{textDecoration: "none", marginTop:"100px"}}>
              <Link to="/userOrder" class="d-flex justify-content-start"><img src={checklist} style={{height:"30px"}} /><h5>User Order</h5></Link>
              <br/>
              <Link to="/review" class="d-flex justify-content-start"><img src={rating} style={{height:"30px"}} /><h5>Review</h5></Link>
              <br/>
                 { isAdmin && <div>
                  <Link to="/addService" class="d-flex justify-content-start"><img src={service} style={{height:"30px"}}/><h5>Add service</h5></Link>
                  <br/>
                  <Link to="/manageAdmin" class="d-flex justify-content-start"><img src={admin} style={{height:"30px"}}/><h5>Manage admin</h5></Link>
                  <br/>
                  <Link to="/orderList" class="d-flex justify-content-start">
                  <img src={order} style={{height:"30px"}}/> <h5>Order list</h5>
                  </Link>
                  </div>
                      }
                 
                 
                 
            </ul>
            </div>
        </div>
    );
};

export default Sidebar;