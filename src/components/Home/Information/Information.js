import React from 'react';
import { Link } from 'react-router-dom';
import './Information.css'
const Information = () => {
    return (
        <div className='section row  w-75 text-center mx-auto text-white'>
            <div className="row">
                <div className="col col-md-6 m-4 p-4 special-1">
                    <h3 className="text-special">For Vegans</h3>
                    <p>Burger + French Fries + Drink</p>
                </div>
                <div className="col col-md-6 m-4 p-4 special-1">
                    <h3 className="text-special">For Vegans</h3>
                    <p>Burger + French Fries + Drink</p>
                </div>
                <div className="col col-md-6 m-4 p-4 special-2">
                    <h3 className="text-special">
                        Order Online
                    </h3>
                    <p>Available EveryDay 9AM -11PM</p>
                </div>
                <div className="col col-md-6 m-4 p-4 special-3">
                    <h3 className="text-special">
                        Cake Specials

                    </h3>
                    <p>Every Friday Only $0.99</p>
                </div>
            </div>
        </div>
    );
};

export default Information;