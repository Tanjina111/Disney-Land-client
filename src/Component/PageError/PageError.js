import React from 'react';
import { Link } from 'react-router-dom';
import Image from './PageError.jpg'

const PageError = () => {
    return (
        <div className='my-5'>
            <img src={Image} alt="" className='img-fluid'/>

            {/* Back to home button */}
            <div className='mb-4'>
            <Link to='/'><button className='btn btn-primary my-3'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default PageError;