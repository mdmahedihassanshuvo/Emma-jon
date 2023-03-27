import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) =>{
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='Products-container'>
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id} 
                        addToCart={addToCart}>
                        </Product>)
                }
            </div>
            <div className='order-summary'>
                <h2>Order Summary</h2>
                <p>Selected item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;