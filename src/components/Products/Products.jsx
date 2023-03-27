import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() =>{
        const storedCart = getShoppingCart()
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            const quantity = storedCart[id]
            // console.log(quantity)
            addedProduct.quantity = quantity;
            console.log(addedProduct.quantity)   
        }
    }, [products])

    const addToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
            <div className='relative'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;