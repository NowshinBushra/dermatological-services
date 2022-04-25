import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;