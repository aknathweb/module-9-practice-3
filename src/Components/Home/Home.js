import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    // load sending loader data
    const tshirts = useLoaderData();
    //to set and store cart information
    const [cart, setCart] = useState([]);

    // perform duplicate arrive operation and add unique product
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            //alert for duplicate
            alert('t-shirt already added');
        }
        else {
            // add unique cart
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    // perform product remove from cart
    const handleRemoveItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;