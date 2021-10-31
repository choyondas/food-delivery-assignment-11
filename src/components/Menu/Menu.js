import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css"
const Menu = () => {
    return (
        <div >


            <div>
                <img className="w-50 img-fluid" src="https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries-1024x536.png" alt="" />
                <Link className="menu-item" to='/burgers'>
                    BUY YOUR FAVOURITE BURGERS
                </Link>
            </div>


            <div className="available-item">
                <h2 className="text-center text-white p-5 m-5">You can only buy Burger from here.</h2>



                {/* <div className="menu-link">


                    <Link className="menu-item" to='/toasts'>
                        TOASTS
                    </Link>
                    <Link className="menu-item" to='/pizzas'>
                        PIZZAS
                    </Link>
                    <Link className="menu-item" to='/salads'>
                        SALADS
                    </Link>
                    <Link className="menu-item" to='/drinks'>
                        DRINKS
                    </Link>
                    <Link className="menu-item" to='desserts'>
                        DESSERTS
                    </Link>
                </div> */}

                <div className="w-75 mx-auto">

                    <h2 className="text-center p-5 ava">Stock now</h2>

                    <div className="row">
                        <div className="col col-md-5 m-3 p-3 left-item">
                            <h1 className="text-center">BURGERS</h1>
                            <hr />
                            <div>
                                <h2>#1 CLASSIC BURGER <span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>
                            <div>
                                <h2>#2 AMERICAN CHEESEBURGER<span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>
                            <div>
                                <h2>#3 DELUXE <span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>
                            <div>
                                <h2>#4 DOUBLE <span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>
                            <div>
                                <h2>#5 VEGGIE BURGER <span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>
                            <div>
                                <h2>#6 SPICY CHICKEN <span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>
                            <div>
                                <h2>#7 FISH FILLET <span>$34</span></h2>
                                <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                            </div>

                        </div>
                        <div className="col col-md-5 m-3 p-3 ">
                            <div className="row left-item p-3">
                                <h1 className="text-center">FRIED & SIDES</h1>
                                <hr />
                                <div>
                                    <h2>FRIES <span>$34</span></h2>
                                    <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                                </div>
                                <div>
                                    <h2>CHILI FRIES <span>$34</span></h2>
                                    <p>Circus chili, cheddar, sour cream, jalapeño</p>
                                </div>
                                <div>
                                    <h2>1/2 DOZEN WINGS <span>$34</span></h2>
                                    <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                                </div>
                                <div>
                                    <h2>JALAPEÑO POPPERS <span>$34</span></h2>
                                    <p>5oz beef patty, lettuce, tomato, pickles, Circus sauce</p>
                                </div>
                            </div>
                            <div className="row left-item mt-5 p-3">
                                <h1 className="text-center">SHAKES</h1>
                                <hr />
                                <div>
                                    <h2>MILKSHAKE <span>$34</span></h2>
                                    <p>Vanilla/ Strawberry/ Chocolate/ Salted Caramel</p>
                                </div>
                                <div>
                                    <h2>CANDY SHAKE <span>$34</span></h2>
                                    <p>M&Ms/ Kit Kat/ Oreos/ Reese’s Pieces</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menu;