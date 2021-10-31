import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./Burger.css"
const Burger = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit1 = data => {
        console.log(data);


        axios.post('http://localhost:5000/burgers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }




    const [burgers, setBurgers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/burgers')
            .then(res => res.json())
            .then(data => setBurgers(data));
    }, [])


    return (
        <div className="text-center">
            <h1 className="burg">BURGER SECTON</h1>

            <div className="row">
                {

                    burgers.map((burger, index) => <div
                        className="col-lg-4 col-md-6  burger-item"
                        key={burger._id}

                    >


                        <div class="card">
                            <img class="card-img-top" style={{ height: '300px' }} src={burger.url} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{burger.name}</h5>
                                <p class="card-text">{burger.description}</p>
                                <p>$ {burger.price}</p>
                            </div>
                            <div class="card-footer">
                                <button className='btn-primary text-white div-btn'>
                                    <Link className='btn-deta' to={`/booking/${burger._id}`}> Buy Now</Link>
                                </button>

                            </div>
                        </div>



                    </div>)

                }


            </div>



            <h2>add more Burger</h2>
            <form onSubmit={handleSubmit(onSubmit1)}>

                <input className="p-2 m-2"   {...register("name")} placeholder="name" />

                <br />
                <input className="p-2 m-2" type="number" {...register("price", { required: true })} placeholder="price" />
                <br />
                <input className="p-2 m-2" {...register("description", { required: true })} placeholder="description" />
                <br />
                <input className="p-2 m-2" {...register("url", { required: true })} placeholder="image url" />
                <br />

                <br />
                <input className="btn btn-danger p-3" type="submit" />
            </form>
        </div>

    );
};

export default Burger;