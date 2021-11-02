import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import React from 'react';
import Image from './Mickey.png'

const LogIn = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    // Google Log In
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/home');
            }) 
    } 

    return (
        <div className='container my-3 d-flex my-5'>
            <div className='col-5'>
                <img src={Image} alt="" />
            </div>
            <div className='col-5'>

                {/* Login Form */}
                <h2 className='text-primary'>Login</h2>
                <form>
                <div style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}}>
                <h6 className='mt-2 py-2'>E-mail: </h6>
                <input type="text" name="email" required placeholder='Enter Mail'/>
                <h6 className='mt-4'>Password: </h6>
                <input type="password" name="password" required placeholder='Enter Password'/>
                <br />
                <input className='btn btn-primary my-4' type="submit" value="Submit"/><br />
                <p className='text-danger'></p>
                </div>
                </form>

                {/* Google Sign In */}
                <div>You can also sign in with <span className='text-primary'>Google</span></div>
                <button className='my-2 btn btn-warning' onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default LogIn;