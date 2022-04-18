import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const navigate = useNavigate();
    const navigateLogin = (event) => {
        navigate('/login');
    }
    return (
        <div className='signup-form mt-5'>
            <h2 className='text-center'>Please Sign Up</h2>
            <form action="">
                <input type="name" name='name' id='' placeholder='Your Name'/>
                <input type="email" name='email' id='' placeholder='Email Address' required/>
                <input type="password" name='password' id='' placeholder='Password' required/>
                <input type="submit" value="SignUp"/>
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default SignUp;