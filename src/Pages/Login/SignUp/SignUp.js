import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import auth from '../../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const SignUp = () => {
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const googleAuth = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
            
            const user = result.user;
            navigate('/');
        }).catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const email = error.email;
           
            const credential = GoogleAuthProvider.credentialFromError(error);
            
        });
    }

    
    const navigateLogin = () => {
        navigate('/login');
    }


    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password);

    };


    return (
        <div className='signup-form mt-5'>
            <h2 className='mb-4'>Please Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name='password' id='' placeholder='Password' required />
                <input type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <button className='' onClick={googleAuth}><p>Continue With Google</p></button>
        </div>
    );
};

export default SignUp;