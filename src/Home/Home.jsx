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
          <div>
          <p>Pick Up Your Package With Trusted partner</p>
          <h1>Reserve Your Delivery </h1>
          <h1 className='h11'>Fast and Secure</h1>
          
          <p>Enter postcode to see what happen your deliver</p>
          <br />
          <div className="subscription-inputt">
            <input className='pls' type="text" placeholder="eg:EC4R 3TE" />
            <button className='serbutt'>Search</button>
          </div>
          <a href="compl">
          <img src="compl.png" className='compl' />
          </a>
          {/* <button>Book Now</button> */}
          <div className="chat-mockup">
            {/* Add chat mockup image or component */}
          </div>
          </div>
          <div>
            {/* <div> <img className='homeback' src='./homeback.png'/></div> */}
            <img className='manimg' src='./manman.png'/>
          </div>
        </section>



        <section className='popcato'>
          <div >
            <h1>Tuck Mate Popular Catogory</h1>
            <div className='popflex'>
            <div className='popcatoin'>
              <img src="Grocery.jpg" alt="Grocery Colombo" className='grocery'/>
              <div className='grotext'>
              <h5 className='gp1'>Grocery </h5>
              <p>21 Shops</p>
              </div>
            </div>

            <div className='popcatoin'>
              <img src="Glass.jpg" alt="Grocery Colombo" className='grocery'/>
              <div className='grotext'>
              <h5 className='gp1'>Grocery </h5>
              <p>21 Shops</p>
              </div>
            </div>

            <div className='popcatoin'>
              <img src="chem.jpg" alt="Grocery Colombo" className='grocery'/>
              <div className='grotext'>
              <h5 className='gp1'>Grocery </h5>
              <p>21 Shops</p>
              </div>
            </div>


            <div className='popcatoin'>
              <img src="Phama.jpg" alt="Grocery Colombo" className='grocery'/>
              <div className='grotext'>
              <h5 className='gp1'>Grocery </h5>
              <p>21 Shops</p>
              </div>
            </div>


            <div className='popcatoin'>
              <img src="wood.jpg" alt="Grocery Colombo" className='grocery'/>
              <div className='grotext'>
              <h5 className='gp1'>Grocery </h5>
              <p>21 Shops</p>
              </div>
            </div>


            <div className='popcatoin'>
              <img src="freez.jpg" alt="Grocery Colombo" className='grocery'/>
              <div className='grotext'>
              <h5 className='gp1'>Grocery </h5>
              <p>21 Shops</p>
              </div>
            </div>

            </div>


          </div>
        </section>

        {/* *******************Home Part 2********************** */}

        <div >
          <img className='homepart2' src="homepart2.png" alt="" />
        </div>

        <div>
        <img className='homepart2' src="homepart3.png" alt="" />

        </div>



      </main>



     
      <Footer/>

    </div>

  );
};

export default HomePage;