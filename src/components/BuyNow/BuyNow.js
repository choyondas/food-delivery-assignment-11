import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import axios from 'axios'
import { Link } from 'react-router-dom';


const BuyNow = () => {
    const { id } = useParams();
    const [burge, setBurge] = useState([])
    useEffect(() => {
        fetch(`https://ghostly-labyrinth-89425.herokuapp.com/burgers/${id}`)
            .then(res => res.json())
            .then(data => setBurge(data))

    }, [])





    const { register, handleSubmit, reset } = useForm();
    const onSubmit1 = data => {
        console.log(data);


        axios.post('https://ghostly-labyrinth-89425.herokuapp.com/address', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }


    return (
        <div>
            <h2 className="text-center p-4">here is booking id: {id}</h2>

            <div class="card mb-3">
                <img class="card-img-top" src={burge.url} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{burge.name}</h5>
                    <p class="card-text">{burge.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>


            <div className="text-center">
                <h3>Your address</h3>
                <form onSubmit={handleSubmit(onSubmit1)}>

                    <input className="p-2 m-2"   {...register("name")} placeholder="Your Name" />

                    <br />

                    <input className="p-2 m-2" {...register("number", { required: true })} placeholder="address" />
                    <br />
                    <input className="p-2 m-2" {...register("phone", { required: true })} placeholder="phone" />
                    <br />

                    <br />
                    {/* <input className="btn btn-danger p-3" type="submit" /> */}

                    <button className='btn-primary text-white div-btn'>
                        <Link className='btn-deta' to='/address'> submit</Link>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BuyNow;