import React, { useState } from 'react';
import banner1 from '../../../images/banner1.jpg';


const Banner = () => {

    return (
        <div>
            <div className="card text-white">
                <img src={banner1} className="card-img" alt=""/>
                    <div className="card-img-overlay mt-5 ms-5">
                        <h1 className="card-title">Meet Expert</h1>
                        <h2 className="card-title">Dr. Tiara Doe</h2><br />
                        <h4 className="card-text">Customized skincare made for your skin's unique needs. Safe and natural dermabration.</h4>
                        <h4>Trust your skin to our clinic. We're experienced in making you look beautiful.</h4>
                        <button className='border-0 rounded mt-5 py-2 px-4'>Book an Appointment</button>
                    </div>
            </div>
        </div>

    );
};

export default Banner;