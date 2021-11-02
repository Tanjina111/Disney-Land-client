import React, { useEffect, useState } from 'react';
import './Home.css'
import DisplayServices from '../DisplayServices/DisplayServices';
import Image from './DL2.jpg';
import Image2 from './DL3.jpg';

const Home = () => {
    const [service, setService] = useState([]);
    // const [cart, setCart] = useState(service);

    useEffect(() => {
        fetch('https://frozen-river-40147.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
             {/* First part */}
        <div className="text-light bg-img col-sm-12">
            <div className='text-end p-4 me-5 pe-5'>
            <h1 className='pb-4'>Welcome</h1>
            <h3>to the world of<br />fairytales.</h3>
            </div>
        </div>

        {/* Second Part */}
        <div className='container my-5'>
            <h3 className='text-primary'>Rides with offer price:</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
                        service.map(services => <DisplayServices
                            key={services._id}
                            services={services}
                        >
                        </DisplayServices>)
                    }
        </div>
        </div>

        {/* Third Part */}
        <div className='d-flex shadow rounded col-sm-12 container my-5'>
            <div className='row'>
            <div className='col-md-5 p-3'>
                <img className='img-fluid' src={Image} alt="" />
            </div>
            <div className='col-md-5 m-auto'>
            <p className='text-start'>The park consists of <span className='text-danger'>seven</span> themed areas: Main Street, U.S.A., Fantasyland, Adventureland, Tomorrowland, Grizzly Gulch, Mystic Point, and Toy Story Land. The theme park's cast members speak Cantonese, English, and Mandarin. Guide maps are printed in traditional and simplified Chinese as well as English. <br /><span className='fw-bold text-danger'>Location: </span>Hong Kong Disneyland Resort, Penny's Bay, Lantau Island, Hong Kong. <br /><span className='fw-bold text-danger'>Phone: </span>001122334455 <br /><span className='fw-bold text-danger'>E-Mail: </span>disneyland@fairytale.com</p>
            </div>
            </div>
        </div>

        {/* Fourth Part */}
        <div>
            <img src={Image2} alt="" className='img-fluid w-100'/>
        </div>
        </div>
    );
};

export default Home;