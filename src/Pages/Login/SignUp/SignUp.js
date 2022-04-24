import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      if(user){
        navigate(from, { replace: true });
     }
    

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        createUserWithEmailAndPassword(email, password)

}
const navigateLogin = () =>{
    navigate('/login');
}

    return (
        <div className='signup-form mt-5'>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" id="" placeholder='Your Name'/>

                <input type="email" name="email" id="" placeholder='Email Address' required/>

                <input type="password" name="password" id="" placeholder='Password' required/>

                <input type="submit" value="Sign Up" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <Social></Social>
        </div>
    );
};

export default SignUp;