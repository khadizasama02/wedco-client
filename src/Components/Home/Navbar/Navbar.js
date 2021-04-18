import React, { useContext } from "react";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [,,loggedInUser,] = useContext(UserContext)
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid" >
          <a class="navbar-brand" href="#">
          <span class="mx-5"  style={{fontFamily: 'Dancing Script,  cursive',fontSize:'45px',fontWeight:'bold',color:'#dff9fb'}}>WedCo</span>
          </a>
          <div class="collapse navbar-collapse " >
            <ul class="navbar-nav px-3  ml-auto" style={{fontWeight: 'bold',fontSize:'20px'}}>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                 <span style={{color:'#dff9fb'}}>Home</span> 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 <span  style={{color:'#dff9fb'}}>Services</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 <span  style={{color:'#dff9fb'}}>Portfolio</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 <span  style={{color:'#dff9fb'}}> Blog</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">
                 <span  style={{color:'#dff9fb'}}> Admin</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  <span  style={{color:'#dff9fb'}}> {(loggedInUser.email)?(loggedInUser.displayName):'Login'}</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
