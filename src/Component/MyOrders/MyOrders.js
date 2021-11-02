import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    // Load Data
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    // Delete Service
    const handleDelete = id => {
        const confirm = window.confirm('Delete this order?');
        if(confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.delete > 0) {
                    alert('Order deleted.');
                    const restOrders = orders.filter((deleteOrder) => deleteOrder._id !== id);
                    setOrders(restOrders);
                }
            });
        }
    }
    return (
        <div className='container my-5'>
            <h5>My Orders</h5>
            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4'>
            {orders.map(order => (
                <div className="col-md-5 col-sm-12 col-lg-4 py-1 px-1 text-start shadow rounded">
                <img src={order?.img} className="img-fluid rounded" alt="..." />
                <div className="card-text text-center mt-2">
                <h6 className='text-danger'>{order?.service}</h6>
                <p>{order?.detail}</p>
                <h6>Offer Price: <span className='text-danger'>${order?.price}</span></h6>
                <button className='btn btn-warning' onClick={handleDelete}>Delete Order</button>
                </div>
            </div>
            ))}
            </div>
        </div>
    );
};

export default MyOrders;