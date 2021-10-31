import React from 'react';
import { Link } from 'react-router-dom';

const DisplayServices = (props) => {
    const { name, img, price, offer, des, _id } = props.services;
    return (

        // Services On Home
        <div className='col'>
            <div className='card h-100 text-start'>
                <img src={img} alt="" />
            <div className='card-body'>
                <h4 className='text-danger'>{name}</h4>
                <p>{des}</p>
                <h6 className='text-danger'>Ticket Price:</h6>
                <h6>Regular Price: {price}</h6>
                <h6>Offer Price: <span className='text-danger'>{offer}</span></h6><br />

                {/* Get Detail Id */}
                <Link to={`/detail/${_id}`}><button className='btn btn-warning'>Book Now</button></Link>
            </div>
        </div>
        </div>
    );
};

export default DisplayServices;