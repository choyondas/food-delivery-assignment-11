import React from 'react';
import { Link } from 'react-router-dom';
import './More.css'
const More = () => {
    return (
        <div className='row dissl'>
            <div className='col-lg-6 col-md-12'>
                <h2>fast food</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam. Explicabo eaque necessitatibus quis eum non nostrum impedit quaerat, quidem dolorum aliquid iste qui consectetur illo accusantium ut, exercitationem omnis.</p>
            </div>
            <div className='col-lg-6 col-md-12'>
                <img className='img-fluid' src="https://cloudinary.hbs.edu/hbsit/image/upload/s--sFv3MZbN--/f_auto,c_fill,h_375,w_750,/v20200101/D730ED9CC0AF1A0C18B3499EF75E86D7.jpg" alt="" />
            </div>
            <div className='text-center'>
                <Link to="/home"><button className='btn-primary m-4 text-center'>go back to home</button></Link>
            </div>
        </div>
    );
};

export default More;