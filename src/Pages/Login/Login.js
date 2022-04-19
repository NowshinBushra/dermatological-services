import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const provider = new GoogleAuthProvider();
const Login = () => {
    const navigate = useNavigate();
 
    const googleAuth = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
            
            const user = result.user;
            navigate('/home');
        }).catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const email = error.email;
           
            const credential = GoogleAuthProvider.credentialFromError(error);
            
        });
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');
    
    

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
         })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

    }

    const navigateSignup = (event) => {
        navigate('/signup');
    }
    return (
        <div className='login-container w-50 mx-auto mt-5'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} className='w-50' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className='w-50' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have an account? <Link to='/signup' className='text-danger pe-auto text-decoration-none' onClick={navigateSignup}>Please Sign Up</Link> </p>
            <button  className='btn btn-primary pb-0' onClick={googleAuth}><p>Continue With Google</p></button>
        </div>
    );
};

export default Login;