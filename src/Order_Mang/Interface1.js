import React, { useState } from 'react';
import './Interface1.css';


const Interface1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    name1: '',
    address1: '',
    contact1: '',
    description: '',
    category: '',
    package_size: '',
    weight: '',
    package: '',
    pickup: '',
    delivery: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButton1Click = () => {
    // Logic for Button 1
    alert('Button 1 clicked!');
  };

  const handleButton2Click = () => {
    // Logic for Button 2
    alert('Button 2 clicked!');
  };

  



return (
    <div className="form-container">
         <div className="button-container">
        <button className="button1" onClick={handleButton1Click}>Pickup</button>
        <button  className="button2" onClick={handleButton2Click}>Deliver</button>
      </div>
      
      <form  onSubmit={(e) => e.preventDefault()}>
        
        <div className="form-group">
            <h3>Customer Details</h3>
          <label htmlFor="name">Name <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /></label>
          
          
        </div>
        <div className="form-group">
          <label htmlFor="address">Address  <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          /> </label>
         
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          /> </label>
         
        </div>

        <div className="form-group">
            <h3>Supplier Details</h3>
          <label htmlFor="name1">Name <input
            type="text"
            id="name1"
            name="name1"
            value={formData.name1}
            onChange={handleChange}
            required
          /> </label>
          
          
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          /> </label>
          
        </div>
        <div className="form-group">
          <label htmlFor="contact1">Contact<input
            type='tel'
            id="contact1"
            name="contact1"
            value={formData.contact1}
            onChange={handleChange}
            required
          /> </label>
          
        </div>

        <div className="form-group">
            <h3>Package Details</h3>
          <label htmlFor="description">Description <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />  </label>
        
        </div>
        <div className="form-group">
          <label htmlFor="dropdown">Select the Catagory  : </label>
          <select
            id="dropdown"
            value={formData.option}
            onChange={handleChange}
            required

          >
            <option value="">Select</option>
            <option value="option1">Grocery items</option>
            <option value="option2">Glass</option>
            <option value="option3">Furniture</option>
            <option value="option3">Pharmecy</option>
          </select>
            
        </div>

<div className="form-group">
          <label htmlFor="package_size" >Package Size 
          <input
            type="text"
            id="package_size"
            name="package_size"
            placeholder="Enter in squre feet"
            value={formData.package_size}
            onChange={handleChange}
            required
          />
    </label>
         
        </div>  

        <div className="form-group">
          <label htmlFor="weight" >Weight
          <input
            type="text"
            id="Weight"
            name="Weight"
            placeholder="Enter in Kg"
            value={formData.package_size}
            onChange={handleChange}
            required
          />
    </label>
    </div>   
    
        <div className="radiobtn">
  <div>
    <label>
        
      <input
        type="radio"
        name="package"
        value="package"
        checked={formData.option === 'package'}
        onChange={handleChange}
      />
      Package
    </label>
  </div>
  <div>
    <label>
      <input 
        type="radio"
        name="package"
        value="unpackage"
        checked={formData.option === 'unpackage'}
        onChange={handleChange}
      />
      Unpackage
    </label>
  </div>
</div>
        

        <div className="form-group">
          <label htmlFor="date">Pickup  :  </label>
          <input type="datetime-local" placeholder="Pickup Time"
         
           
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Delivery  :  </label>
          <input type="datetime-local" placeholder="Delivery Time" 
         
           
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>


        

        <div className="form-group">
          <button  className="button3" type="submit">Confirm Order</button>
        </div>



      </form>
    </div>

    );
};

export default Interface1;
