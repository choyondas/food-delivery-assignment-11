import React from 'react';
import { useForm } from "react-hook-form";
const Customer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>customer</h2>


            <div className="w-50 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input  {...register("example")} />
                    <br />

                    <input {...register("exampleRequired", { required: true })} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input classname="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Customer;