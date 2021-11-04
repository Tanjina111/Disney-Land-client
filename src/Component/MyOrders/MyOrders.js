import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const {user} = useAuth(); 
    const [orders, setOrders] = useState([]);

    // Load Data
    useEffect(() => {
        fetch(`https://frozen-river-40147.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    // Delete Service
    const handleDelete = id => {
        const confirm = window.confirm('Delete this order?');
        if(confirm) {
            fetch(`https://frozen-river-40147.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Order deleted.');
                    const restOrders = orders.filter((deleteOrder) => deleteOrder._id !== id);
                    setOrders(restOrders);
                }
                
            });
        }
    }
    return (
       
        <div className='container my-5 col-sm-12'>
            <h5 className='mb-4'>My Orders</h5>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
            {orders.map(order => <Order
            key = {order._id}
            order= {order}
            handleDelete = {handleDelete}
            ></Order>)}
            </div>
        </div>
    );
};

export default MyOrders;