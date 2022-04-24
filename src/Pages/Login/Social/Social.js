import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      
      if (user) {
        
          navigate(from, { replace: true })
        
      }
    return (
        <div>
            <button onClick={() => {signInWithGoogle()}} type="button" className="btn btn-primary">Sign In with Google</button>
            
        </div>

    );
};

export default Social;
