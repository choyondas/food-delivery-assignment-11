import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();


    const [user, setUser] = useState([])



    useEffect(() => {
        const url = `https://ghostly-labyrinth-89425.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);



    // const handleDelUser = id => {
    //     const proceed = window.confirm('Are you want to delete?');
    //     if (proceed) {
    //         const url = `https://ghostly-labyrinth-89425.herokuapp.com/services/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully')

    //                     const remainUser = user.filter(use => use._id !== id);
    //                     setUser(remainUser);
    //                 }
    //             })
    //     }
    // }


    return (
        <div className="container">
            <div>
                <br /><br />
                <h2 className="text-center fw-bold text-black ">{user.name}</h2>
                <p className="text-center">id: {id}</p>
                <div class="card mb-3">
                    <img src={user.url} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title text-warning fw-bold">${user.price}</h2>
                        <p class="card-text">{user.description}</p>

                        <Link to="/customer">
                            <button className="btn btn-success  m-3">CONFIRM ORDER</button></Link>

                        {/* <button className="btn" onClick={() => handleDelUser(user._id)} >Cancel</button> */}
                        <Link to="/home">
                            <button className="btn btn-danger  ">CENCLE</button></Link>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;