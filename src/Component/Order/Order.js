import React from 'react';

const Order = (props) => {
    const {img, service, detail, price, _id, status } = props.order;

    return (

        // Show My Orders
        <div className="col text-start shadow rounded m-3 p-3">
                <img src={img} className="img-fluid rounded" alt="..." />
                <div className="card-text text-center mt-2">
                <h6 className='text-danger'>{service}</h6>
                <p>{detail}</p>
                <p>Order Status: <span className='text-primary'>{status}</span></p>
                <h6>Price: <span className='text-danger'>${price}</span></h6>
                <button className='btn btn-warning' onClick={() => props.handleDelete(_id)}>Delete Order</button>
                </div>
        </div>
    )
}

export default Order;