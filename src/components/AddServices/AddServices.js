import React from 'react';
import { useForm } from "react-hook-form";
const AddServices = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch(`https://ghostly-labyrinth-89425.herokuapp.com/addServices`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div className="p-5 m-5 text-center">
            <h2>add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="p-2 m-2"   {...register("name")} placeholder="name" />

                <br />
                <input className="p-2 m-2" type="number" {...register("price", { required: true })} placeholder="price" />
                <br />
                <input className="p-2 m-2" {...register("description", { required: true })} placeholder="description" />
                <br />
                <input className="p-2 m-2" {...register("url", { required: true })} placeholder="image url" />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-danger p-3" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;