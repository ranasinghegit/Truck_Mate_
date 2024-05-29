import React from 'react';

function OrderItem({ order }) {
  const { name, from, to, date, time, status } = order;

  return (
    <div className="order-itemm">

      <div className="order-detaills">

        <div >
        <div>{name}</div>
        <div>{
        from} To {to}</div>
        <div>{date} {time}</div>
        </div>


        <div className="order-actions">
        <button className='btt22'>Location</button>
        {/* {status ? <button disabled>{status}</button> :  */}
        <button className='btt23'>Pick</button>
      </div>


      </div>
      



    </div>
  );
}

export default OrderItem;