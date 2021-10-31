import React from 'react';
import { useEffect, useState } from 'react';
const PlaceOrder = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://ghostly-labyrinth-89425.herokuapp.com/placeorder')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>

            <img src="https://d9s2dgyl4mf0b.cloudfront.net/magento-connect/media/catalog/product/cache/9/image/468x300/9df78eab33525d08d6e5fb8d27136e95/i/c/icon_99_1.png" alt="" />
            {
                users.map(user => <div


                >



                    <div className="card p-5 m-4">

                        <h2> name: {user.name}</h2>
                        <p>city: {user.city}</p>
                        <p>phone: {user.phone}</p>
                    </div>



                </div>)
            }



        </div>
    );
};

export default PlaceOrder;