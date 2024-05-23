import React from 'react';

const COrderItem = ({ order, actions }) => {
  const { name, from, to, date, time } = order;

  return (
    <div className="order-item">
      <div className="order-details">
        <span>{name}</span>
        <span>{from} To {to}</span>
        <span>{date} {time}</span>
      </div>
      <div className="order-actions">
        {actions.map((action, index) => (
          <button key={index}>{action}</button>
        ))}
      </div>
    </div>
  );
};

export default COrderItem;