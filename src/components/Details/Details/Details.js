import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();


    const [user, setUser] = useState({})


    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    return (
        <div className="container">
            <h2 className="text-center fw-bold p-4">{user.name}</h2>
            <div class="card mb-3">
                <img src={user.url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2 class="card-title text-warning fw-bold">${user.price}</h2>
                    <p class="card-text">{user.description}</p>

                    <Link to="/customer">
                        <button className="btn btn-success ">CONFIRM ORDER</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Details;