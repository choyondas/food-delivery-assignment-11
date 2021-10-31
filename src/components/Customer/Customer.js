import React from 'react';
import { useForm } from "react-hook-form";
import "./Customer.css"
const Customer = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                    <div className="text-center">
                        <button className="btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Customer;