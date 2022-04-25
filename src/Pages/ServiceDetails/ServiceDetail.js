import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='service-form mt-5'>
            <h4>Service: {serviceId}</h4>
            <form>
                
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="text" id="" placeholder='Your Number' />

                <input type="email" name="email" id="" placeholder='Email Address' />

                <input className='py-5' type="text" id="" placeholder='Your Message' />
            

        </form>
            <Link to="/checkout">
                <button className='btn btn-info text-light mt-3'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;