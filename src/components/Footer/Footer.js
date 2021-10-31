import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer ">
            <div className="row w-75 mx-auto p-5">
                <div className="col">
                    <img src="https://i.ibb.co/xFLmcr2/Background-6.png" alt="" />

                    <p>Address:238 Park Avenue New Yourk, NY 90210</p>
                    <p>Email: choyondas08@gmail.com</p>
                </div>
                {/* <div className="col ">
                <h3>OUR MENU</h3>
                <NavLink className="link" to="/about">BURGERS</NavLink>
                <NavLink className="link" to="/about">PIZZAS</NavLink>
                <NavLink className="link" to="/about">TOASTS</NavLink>
                <NavLink className="link" to="/about">SALADS</NavLink>
                <NavLink className="link" to="/about">DRINKS</NavLink>
                <NavLink className="link" to="/about">DESSERTS</NavLink>
            </div> */}
                <div className="col">
                    <h3>NEWSLETTER</h3>
                    <input type="text" placeholder="Your Email" />
                    <button>SUBSCRIBE</button>
                </div>

            </div>
        </div>

    );
};

export default Footer;