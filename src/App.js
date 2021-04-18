import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/Home/AddService/AddService';
import { createContext, useEffect, useState } from 'react';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import Orders from './Components/Orders/Orders';
import Dashboard from './Components/Home/Dashboard/Dashboard';
import ManageAdmin from './Components/ManageAdmin/ManageAdmin';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import AddReview from './Components/AddReview/AddReview';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

  

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [service,setService] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5055/service')
    .then(res=>res.json())
    .then(data=>setService(data))
       
  },[])
  return (
    <UserContext.Provider value ={[service,setService,loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route  path="/home">
          <Home></Home>

        </Route>
        <Route  path="/addService">
          <AddService></AddService>
        </Route>
        <PrivateRoute  path="/dashboard">
         <Dashboard></Dashboard>

        </PrivateRoute>
        <Route  path="/orderList">
         <OrderDetails></OrderDetails>

        </Route>
        <Route  path="/manageAdmin">
         <ManageAdmin></ManageAdmin>

        </Route>
        <Route  path="/review">
         <AddReview></AddReview>>

        </Route>
        <Route  path="/order/:_id">
          <Orders></Orders>

        </Route>
        <Route  path="/login">
         <Login></Login>

        </Route>
        <PrivateRoute path="/book/:_id">
          <Book></Book>
          </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
          </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
