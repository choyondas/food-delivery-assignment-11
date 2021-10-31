import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const Address = () => {



    const [address, setAddress] = useState([])
    useEffect(() => {
        fetch('https://ghostly-labyrinth-89425.herokuapp.com/address')
            .then(res => res.json())
            .then(data => setAddress(data));
    }, [])


    return (
        <div >
            <div className="text-center">
                <h1 className="burg">ORDER CONFIRMED</h1>
                <img src="https://thumbs.dreamstime.com/b/order-confirmed-label-sticker-order-confirmed-badge-sign-order-confirmed-label-sticker-order-confirmed-badge-sign-order-confirmed-191406938.jpg" alt="" />

                <div className="row">
                    {

                        address.map((add) => <div
                            className="col-lg-4 col-md-6  burger-item"
                            key={add._id}

                        >


                            <div class="card">

                                <div class="card-body">
                                    <h5 class="card-title">{add.name}</h5>
                                    <p class="card-text">{add.phone}</p>
                                    <p>$ {add.address}</p>
                                </div>
                                <div class="card-footer">
                                    <button>successfull</button>

                                </div>
                            </div>



                        </div>)

                    }


                </div>





            </div>
        </div>
    );
};

export default Address;