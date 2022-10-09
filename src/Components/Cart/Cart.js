import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {

    
    return (
        <div>
            {/* Conditional style set or rendering using ternary operator */}
            <h3 className={cart.length === 2 ? `orange` : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            
        </div>
    );
};

export default Cart;

