import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id='products' className='products'>
            <h2 className='product-title pt-5'>Buy Our Products</h2>
            <div className='product-container  mx-5'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                >
                </Product>)
            }
            </div>
        </div>
    );
};

export default Products;