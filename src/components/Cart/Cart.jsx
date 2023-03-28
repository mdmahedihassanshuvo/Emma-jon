import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)

    let total = 0;
    let shippingCharge = 0
    let quantity = 0
    for(const Product of cart){
        // console.log(Product)
        total = total + Product.price * Product.quantity
        shippingCharge += Product.shipping
        quantity = quantity + Product.quantity
    }

    const tax = total*7/100
    const grandTotal = total + shippingCharge + tax
    return (
        <div className='cart h-96 p-4 mb-1 sticky top-5'>
            <h2 className='text-2xl text-center mb-2 mt-2 underline text-indigo-700  font-semibold'>Order Summary</h2>
            <p>Selected item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;