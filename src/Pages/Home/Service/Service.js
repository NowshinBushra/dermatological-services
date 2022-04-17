import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='service'>
            
                <img className='rounded-circle' src={img} alt="" />
            

            <div className='service-details mb-5'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>{description}</small></p>
                <button>Book Appointment</button>
            </div>

        </div>
    );
};

export default Service;