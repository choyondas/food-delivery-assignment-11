import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Services.css"
const Services = () => {
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch('https://ghostly-labyrinth-89425.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isDeleted]);



    const handleDelete = (id) => {

        fetch(`https://ghostly-labyrinth-89425.herokuapp.com/deleteServices/${id}`, {
            method: 'DELETE',
            headers: { contentType: 'application/json' }

        })
            .then(res => res.json())
            .then(result => {
                if (result.deleteCount) {
                    setIsDeleted(true);
                } else {
                    setIsDeleted(false);
                }
            });
        console.log(id);
    }
    const { user } = useAuth();
    const handleAddToCart = (index) => {
        const data = services[index];

        const email = user.email;

        data.email = { email }
        // data.email = 'choyondas08@gmail.com';

        console.log(services[index]);






        // console.log(data.email)

        fetch("https://ghostly-labyrinth-89425.herokuapp.com/addOrder", {
            method: "POST",
            headers: { contentType: "application/json" },
            body: JSON.stringify(data),

        });

    };

    return (

        <div className='pt-5 services-section row'>
            <h1 className='mx-auto text-center' >Food Items</h1>
            <hr />

            {

                services.map((service, index) => <div
                    className="col-lg-3  service-item m-4 p-3"
                    key={service.id}

                >


                    <div class="card">
                        <img class="card-img-top" style={{ height: '300px' }} src={service.url} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{service.name}</h5>
                            <p class="card-text">{service.description}</p>
                            <p>$ {service.price}</p>
                        </div>
                        <div class="card-footer">
                            <button className='btn-primary text-white div-btn'>
                                <Link className='btn-deta' to={`/details/${service.id}`}> Details</Link>
                            </button>
                            {user?.email && <button onClick={() => handleDelete(service._id)} className='btn-danger text-white m-2'>Delete</button>}

                            {user?.email && <Link to={`update/${service._id}`}>
                                <button className='btn-warning text-white m-2'>Update</button>
                            </Link>}
                            {/* {user?.email &&
                                <button className='btn-primary text-white div-btn'>
                                    <Link className='btn-deta' to={`/services/${service._id}`}> Buy Now</Link>
                                </button>

                            } */}
                        </div>
                    </div>



                </div>)

            }
        </div>
    );
};

export default Services;