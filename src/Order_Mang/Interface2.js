import React, { useState } from 'react';
import './Interface2.css'; 

const Interface2= () => {
 
      
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handlePayNowClick = () => {
    setShowPayment(true);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const validateCardDetails = () => {
    const isValidCardNumber = /^\d{16}$/.test(cardNumber);
    const isValidCvv = /^\d{3}$/.test(cvv);
    const today = new Date();
    const selectedDate = new Date(expiryDate);
    const isValidExpiryDate = selectedDate > today;
    return isValidCardNumber && isValidCvv && isValidExpiryDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCardDetails()) {
      alert('Payment successful!');
      alert('Please enter valid card details.');
    }
  };

  return (
    <div className="order-summary-container">
      <div className="order-summary-box">
        <h2>Order Summary</h2>
        <p>Order reference: 234</p>
        <p>Galle - Colombo</p>
        <p>Weight: 20kg</p>
        <p>Total: LKR 5000</p>
        <button  className="button1" onClick={handlePayNowClick}>Pay Now</button>
      </div>
      {showPayment && (
        <div className="payment-section">
          <h4>Payment Type</h4>
          <select>
            <option value="Debit card">Debit card</option>
            <option value="Credit card">Credit card</option>
            
          </select>

          <h4>How would you like to pay?</h4>
          <h2>Card Details</h2>
          <div className="card-details">
         
          <h4>Card holder name</h4>
            <input
              type="text"
              id="cardname"
              placeholder="Card name"
              
            />
      
           
        <h4>Card number</h4>
            <input
              type="text"
              id="cardno"
              placeholder="Card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            
            <h4>CVV</h4>
            <input
              type="text"
              id="cvv"
              placeholder="CVV"
              
            />
           <h4>Expiry Date</h4>
            <input
              type="text"
              id="exdate"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
            
            
            <div className="btn">
          <button  className="button2" type="submit">Confirm Payment</button>
        </div>

          </div>
        </div>
      )}
      {}
    </div>
  );
};

export default Interface2;
