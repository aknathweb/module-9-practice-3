import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <p>buy more product</p>
        </div>
    }
    else {
        message = <p>Thanks for buying!</p>
    }

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
            {
                //show dynamic message base on condition
                message
            }
            {
            //information show with ternary operator
            cart.length === 3 ? <p>3 product added</p>: <p>more or less 3 product added</p>
            }
            
            {
            //show only condition true
            cart.length === 2 && <p>AND operator; Double items</p>
            }
            
            {
            // show only condition false
            cart.length === 4 || <p>OR Operator; number of product not 4</p>
            }

        </div>
    );
};

export default Cart;

