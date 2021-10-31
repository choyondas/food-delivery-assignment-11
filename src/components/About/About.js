import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div>
            <div className='about row '>
                <div className='col-lg-5 col-md-4'>
                    <h2 className='heading-1'>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum similique, iste, odit dicta voluptatum eum quos magni dolor ducimus provident exercitationem, quis excepturi ex! Sed amet deserunt molestias et.</p>
                </div>
                <div className='col-lg-5 col-md-4'>
                    <img className='img-fluid img-doc' src="https://www.wrebb.com/wp-content/uploads/2021/04/vector.png" alt="" />
                </div>
            </div>
            <div className='text-center'>
                <Link to="/home">  <button className="btn-primary m-4">
                    back to home
                </button></Link>
            </div>
        </div>
    );
};

export default About;