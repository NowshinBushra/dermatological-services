import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const {id, img, name, price, description } = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            
                <img className='rounded-circle' src={img} alt="" />
            

            <div className='service-details mb-5'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>{description}</small></p>
                <button onClick={ () => navigateServiceDetail(id)}>Consultation</button>
            </div>

        </div>
    );
};

export default Service;