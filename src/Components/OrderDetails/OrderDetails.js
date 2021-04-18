import React, { useEffect, useState } from "react";
import OrderView from "../OrderView/OrderView";
import Sidebar from "../Sidebar/Sidebar";

const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/orderList")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order);
  return (
    <div class="row">
      <div class="col-md-4">
          <Sidebar></Sidebar>
      </div>

      <div class="col-md-8">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>productName</th>
            <th>product price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order) => (
            <OrderView order={order}></OrderView>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  );
};

export default OrderDetails;
