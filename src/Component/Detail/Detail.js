import React, { useRef } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Image from './park.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Detail = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const history = useHistory();
    const location = useLocation();

  // Get Data
    useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
    .then(res => res.json())
    .then(data => setService(data))
    }, []);

    // Form
    const {user} = useAuth();

    const nameRef = useRef();
    const imgRef = useRef();
    const serviceRef = useRef();
    const priceRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const orderSubmit = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const service = serviceRef.current.value;
        const price = priceRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        const order = { name, service, price, email, phone, address, img};

        // Order Placed To New Database
        fetch('https://frozen-river-40147.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Your order has been placed. Thank you.');
                    e.target.reset();
                    history.push(location.state?.from || '/home');
                }
            })
            e.preventDefault();
    }

    return (
        <div>
        <div className='d-flex justify-content-evenly my-5 container row'>

            {/* Detail */}
        <div className="col-md-5 col-12 py-1 px-1 text-start mx-auto shadow rounded mb-1">
            <img src={service?.img} className="img-fluid rounded" alt="..." />
            <div className="card-text text-center mt-2">
            <p>{service?.detail}</p>
            <h6>Offer Price: $<span className='text-danger'>{service?.offer}</span></h6>
            </div>
        </div>

        {/* Order Submit Form */}
        <div style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}} className='col-md-5 col-12 rounded'>
            <h5 className='pt-5'>Order Form</h5>
        <form onSubmit={orderSubmit}>
            <input type="text" defaultValue={service?.name} ref={serviceRef} /><br />
            <input type="text" defaultValue={service?.img} ref={imgRef} /><br />
            <input type="text" defaultValue={service?.price} ref={priceRef} /><br /><br />
            <h6 className='text-danger'>User Detail:</h6>
            <input type="text" defaultValue={user?.displayName} ref={nameRef} /><br />
            <input type="text" defaultValue={user?.email} ref={emailRef} /><br /><br />
            <input type="text" placeholder='Type your exact address' ref={addressRef} required/><br />
            <input type="number" placeholder='Type your correct phone number' ref={phoneRef} /><br /><br />
            <button type="submit" className='btn btn-warning mb-2'>Place Order</button>
        </form>
        </div>
        </div>
            <Link  to='/'><button className='btn btn-primary mt-2 mb-5'>Back To Home</button></Link>

            {/* Banner */}
        <div>
            <img className="img-fluid w-100" src={Image} alt="" />
        </div>
            </div>
    );
};

export default Detail;