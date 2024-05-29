import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
     
<Header />
      <main>
        <section className="hero">
          <h1>Reserve Your Delivery Fast and Secure</h1>
          <p>Your support is on the way in a snap</p>
          <button>Book Now</button>
          <div className="chat-mockup">
            {/* Add chat mockup image or component */}
          </div>
        </section>

        <section className="exclusive-deals">
          <h2>Up to -10% Truck Mate exclusive deals</h2>
          <div className="deal-categories">
            <div className="deal-category">
              <img src="grocery-colombo.jpg" alt="Grocery Colombo" />
              <h3>Grocery Colombo</h3>
            </div>
            {/* Add more deal categories */}
          </div>
        </section>

        <section className="popular-categories">
          <h2>Truck Mate Popular Categories</h2>
          <div className="categories">
            <div className="category">
              <img src="grocery.jpg" alt="Grocery" />
              <h3>Grocery</h3>
            </div>
            {/* Add more categories */}
          </div>
        </section>

        <section className="main-locations">
          <h2>Main Locations</h2>
          <div className="locations">
            <div className="location">
              <img src="location1.jpg" alt="Location 1" />
              <h3>Location 1</h3>
            </div>
            {/* Add more locations */}
          </div>
        </section>

        <section className="truck-mate-app">
          <div className="app-info">
            <h2>TRUCK MATE is more</h2>
            <p>Personalised &amp; Instant</p>
            <p>Download The Truck Mate app for faster ordering</p>
            <div className="app-links">
              <a href="#">
                <img src="app-store.png" alt="App Store" />
              </a>
              <a href="#">
                <img src="google-play.png" alt="Google Play" />
              </a>
            </div>
          </div>
          <div className="app-image">
            {/* Add app image or component */}
          </div>
        </section>

        <section className="partner-sections">
          <div className="partner-section">
            <h2>Partner with us</h2>
            <button>Join Now</button>
            {/* Add partner section image or component */}
          </div>
          <div className="partner-section">
            <h2>Ride with us</h2>
            <button>Apply Now</button>
            {/* Add partner section image or component */}
          </div>
        </section>

        <section className="about-us">
          <h2>Know more about us!</h2>
          <div className="about-info">
            <div className="about-item">
              <h3>Frequent Questions</h3>
              {/* Add frequently asked questions */}
            </div>
            <div className="about-item">
              <h3>Who we are</h3>
              {/* Add information about the company */}
            </div>
            <div className="about-item">
              <h3>Service Products</h3>
              {/* Add information about service products */}
            </div>
            <div className="about-item">
              <h3>Write to Support</h3>
              {/* Add contact form or support information */}
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stat">
            <h3>546+</h3>
            <p>Registered Users</p>
          </div>
          {/* Add more stats */}
        </section>
      </main>



     
      <Footer/>

    </div>

  );
};

export default HomePage;