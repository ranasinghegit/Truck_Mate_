// components/OrderItem.js
import React from 'react';

function OrderItem({ order }) {
  const { name, from, to, date, time, status } = order;

  return (
    <div className="order-item">

      <div className="order-details">

        <div >
        <div>{name}</div>
        <div>{
        from} To {to}</div>
        <div>{date} {time}</div>
        </div>


        <div className="order-actions">
        <button className='bt22'>Location</button>
        {/* {status ? <button disabled>{status}</button> :  */}
        <button className='bt23'>Pick</button>
      </div>


      </div>
      



    </div>
  );
}

export default OrderItem;