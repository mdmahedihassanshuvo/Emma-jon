import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    for(const Product of cart){
        // console.log(Product)
        total += Product.price
    }

    return (
        <div className='p-4 mb-1'>
            <h2 className='text-2xl text-center mb-2 mt-2 underline text-indigo-700  font-semibold'>Order Summary</h2>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${}</p>
            <p>Tax: ${}</p>
            <h6>Grand Total: ${}</h6>
        </div>
    );
};

export default Cart;