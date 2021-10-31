import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Customer.css"
const Customer = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        console.log(data);
        fetch('https://ghostly-labyrinth-89425.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset()
                }
            })
    };




    return (
        <div>
            <h2 className="text-center">customer Information</h2>


            <div className="w-50 mx-auto p-5 customer">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="text-center cus-item">
                        <input className="p-2 m-2 cus-item" placeholder="Your Name"  {...register("name")} />
                        <br />
                        <input className="p-2 m-2 cus-item" placeholder="Your City"  {...register("city")} />
                        <br />
                        <input className="p-2 m-2 cus-item" placeholder="Your Phone"  {...register("phone")} />
                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <br />
                    <div className="text-center ">
                        <div className="m-2">
                            <button className="btn-primary">
                                Submit
                            </button>
                        </div>

                        <Link to="/placeorder">
                            <button className="btn-primary">see the customer information</button>
                        </Link>
                    </div>
                </form>
            </div>



        </div>
    );
};

export default Customer;