import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div>
            <h2 className=" text-center">About us</h2>
            <div className='about row '>
                <div className='col-lg-5 col-md-6'>
                    <h1>Food Delivery Service</h1>
                    <p>The library is now offering a homebound delivery service for patrons who cannot come to the library, because of mobility, health, or disability barriers. Print (regular and large print), Audiobooks, CDs, and DVDs are available and deliveries will be made once per month. Patrons must reside in Redford Township to receive this service.</p>
                </div>
                <div className='col-lg-5 col-md-6 '>
                    <img className="img-fluid " src="https://console.kr-asia.com/wp-content/uploads/2020/05/Food-Delivery-Shutterstock-M-Size-1-scaled.jpg" alt="" />
                </div>
            </div>
            <div className='text-center'>

                <Link to="/">  <button className="btn-primary m-4">
                    Learn More about us
                </button></Link>


                <Link to="/home">  <button className="btn-primary m-4">
                    back to home
                </button></Link>
            </div>
        </div>
    );
};

export default About;