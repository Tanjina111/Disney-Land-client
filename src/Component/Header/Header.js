import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';
import Image from './DL.png'

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        
            // Navbar
        <div>
            <nav className="navbar navbar-light">
            <div className="container-fluid d-flex justify-content-between">

                {/* Left Side */}
            <div className="d-flex col-lg-4 col-md-5 col-sm-12">
            <img className='img-fluid' src={Image} alt="" />
            </div>

                {/* Right Side */}
            <div className='col-lg-6 col-md-5 col-sm-12 d-flex'>

            <NavLink className='m-auto text-decoration-none text-white navs' to="/">Home</NavLink>
           { user.email && 
            <NavLink className='m-auto text-decoration-none text-white navs text-center' to='/orders/:email'>My Orders</NavLink>
            }
            { user.email && 
            <NavLink className='m-auto text-decoration-none text-white navs' to='/manageorders'>Manage Orders</NavLink>
            }
            { user.email && 
            <NavLink className='m-auto text-decoration-none text-white navs' to='/addservice'>Add New Service</NavLink>
            }
            <div className='m-auto'>
                {user.email && <span className='d-flex align-items-center fw-bolder pe-1' style={{color: 'white'}}> {user.displayName}</span>}</div>
            <div className='m-auto text-center'>
                {
                    user.email ?
                    <button className='btn btn-warning' onClick={logOut}>Logout</button>
                    :
                    <NavLink className='m-auto text-decoration-none text-white navs' to="/login">Login</NavLink>
                }</div>

            </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;