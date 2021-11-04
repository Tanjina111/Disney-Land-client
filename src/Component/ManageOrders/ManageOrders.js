import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Image from './manage.png'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    // Load Data
    useEffect(() => {
        fetch("https://frozen-river-40147.herokuapp.com/manageorders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);

    // Delete Service 
    const handleDelete = (id) => {
        const process = window.confirm("Delete order?");
        if (process) {
            fetch(
                `https://frozen-river-40147.herokuapp.com/orders/${id}`, {
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Order deleted successfully");
                        const restOrders = orders?.filter(
                            deleteOrder => deleteOrder._id !== id
                        );
                        setOrders(restOrders);
                    }
                });
        }
    };

    const user = {
        status: 'Approved'
    }

    // Update Service
    const handleUpdate = id => {
        fetch(`https://frozen-river-40147.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Approved')
                }
            });       
    };

    return (
        <div>
        <div className='container my-5 col-sm-12'>
            <h5>All Orders</h5>
            <div className='row row-cols-1 row-cols-md-4 g-4 my-3 mx-auto'>
            {orders.map(order => (
                <div key={order?._id} className="col text-start shadow rounded m-3 p-3 shadow rounded">
                <img src={order?.img} className="img-fluid rounded" alt="..." />
                <div className="card-text text-center mt-2">
                <h6 className='text-danger'>{order?.service}</h6>
                <h6>Ordered by: <span className='text-primary'>{order?.name}</span></h6>
                <button className='btn btn-warning m-1' onClick={() => handleDelete(order?._id)}>Delete</button>
                <button className='btn btn-warning mb-1' onClick={() => handleUpdate(order?._id)}>{order?.status}</button>
                </div>
                </div>
            ))}
            </div>
        </div>
            <div>
                <img className='img-fluid' src={Image} alt="" />
            </div>
        </div>
    );
};

export default ManageOrders;

// {manageeBooking.map((booking) => (
//     <div className='col' key={booking?._id}>
//                 <div className='card h-100 text-start'>
//                 <img src={booking?.placeImg} alt="" />
//                 <div className='card-body'>
                    
//                 <h4 className='text-danger'>{booking?.name}</h4>
//                     <h5>Place: {booking?.placeName}</h5>
//                     <p>{booking?.placeDescriptions.slice(
//                             0,
//                             150
//                         )}</p>
//                     <h6>${booking?.placePrice}</h6>
//                     <p>status: {booking?.status}</p>
//                     <button
//                         onClick={() =>
//                             handleDelete(booking?._id)
//                         }
//                     >
//                         delete
//                     </button>
//                     <button
//                         onClick={() =>
//                             handleUpdate(booking?._id)
//                         }
//                     >
//                         {booking?.status}
//                     </button>))};