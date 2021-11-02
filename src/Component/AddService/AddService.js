import React from "react";
import { useForm } from "react-hook-form";
import Image from './add.jpg'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    // Load Data
    const onSubmit = (data) => {
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Service added.");
                    reset();
                }
            });
    };
    return (
        <div className='my-5 container'>
            <div className='d-flex'>
            
            {/* Left side */}
            <div className='col-lg-4 m-auto'>
                <img className='img-fluid' src={Image} alt="" />
            </div>

            {/* Add Service */}
            <div style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}} className='col-lg-5 m-auto py-3'>
            <h4>Add New Service</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='w-50'
                    {...register("name",
                    {required: true, maxLength: 20,})}
                    placeholder="Type service name"
                    required
                /><br /><br />

                <textarea className='w-50'
                    {...register("description")}
                    placeholder="Type service detail"
                    required
                /><br /><br />
                
                <input className='w-50'
                    type="number"
                    {...register("price")}
                    placeholder="Type price"
                    required
                /><br /><br />
                
                <input className='w-50'
                   {...register("img")}
                   placeholder="Image url"
                   required /><br /><br />

                <button type="submit" className='btn btn-warning my-2 px-4'>Add</button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default AddService;