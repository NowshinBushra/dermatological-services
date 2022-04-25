import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home');
    }


    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='mt-5 d-flex align-items-center justify-content-center'>
            <div>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <input type="text" name="name" id="" placeholder='Your Name' /><br />

                    <input className='my-2' type="email" name="email" id="" placeholder='Email Address' required /><br />

                    <input type="password" name="password" id="" placeholder='Password' required />
                </div>


                <input className='w-2/5 btn btn-primary my-3' type="submit" value="Sign Up" />


            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <Social></Social>
            </div>
        </div>
    );
};

export default SignUp;