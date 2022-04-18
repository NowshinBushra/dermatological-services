import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
        <div className='footer text-center mt-5 p-4'>
            <p>Copyright @ {year}</p>
        </div>
        </>
        
    );
};

export default Footer;