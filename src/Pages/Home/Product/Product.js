import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {img, name, description, price } = product;
    
    return (
        <div className='product'>
            <img className='rounded-circle' src={img} alt="" />
            

            <div className='product-details mb-5'>
                <h4>{name}</h4>
                <p><small>{description}</small></p>
                <p>Price: ${price}</p>
                
                <button className='px-3'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;