import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Services from '../../Services/Services';
import './Nav.css'
const Nav = () => {
    const { user, logout } = useAuth();
    return (
        <div className="top-nav">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                    <div className="container">
                        <div className=' title'>
                            <a className="navbar-brand" href="#"><img className='img-fluid w-75' src="https://i.ibb.co/xFLmcr2/Background-6.png" alt="" /></a>

                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto ">

                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#029d9b"
                                }} className='nav' to="/home">Home</NavLink>


                                <NavLink className='nav' to="/services">Services</NavLink>


                                <NavLink className='nav' to="/placeorder">PlaceOrder</NavLink>





                                {user?.email && <NavLink className='nav' to="/addServices">AddServices</NavLink>}







                                <span className='nav text-primary'>{user.displayName} </span>
                                {user?.email ? <button className='btn-primary btn-out' onClick={logout} ><span className='nav-out'>log out</span></button> :

                                    <NavLink className='nav' to="/login">Login</NavLink>

                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Nav;