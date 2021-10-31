import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';





const Update = () => {
    const { serviceId } = useParams();
    const [singleService, setSingleService] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://ghostly-labyrinth-89425.herokuapp.com/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, []);
    const onSubmit = data => {

        console.log(data);
        fetch(`https://ghostly-labyrinth-89425.herokuapp.com/update/${serviceId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },


                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(result => console.log(result));
    };


    return (
        <div className="text-center">

            <h2> update: {singleService.name}</h2>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
               
                <input defaultValue={singleService.name} {...register("name")} />

               
                <input defaultValue={singleService.price} {...register("price", { required: true })} />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form> */}



            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={singleService.name} className="p-2 m-2"   {...register("name")} />

                <br />
                <input defaultValue={singleService.price} className="p-2 m-2" type="number" {...register("price", { required: true })} />
                <br />
                <input defaultValue={singleService.description} className="p-2 m-2" {...register("description", { required: true })} />
                <br />
                <input defaultValue={singleService.url} className="p-2 m-2" {...register("url", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-danger p-3" type="submit" />
            </form>





        </div>
    );
};

export default Update;