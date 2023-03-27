import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    const addToCart = props.addToCart
    // console.log(props)

    return (
        <div className='Product-container'>
            <img src={img} alt="" />
            <div className='Product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p className='rating'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;