import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // Context data use by using useContext(Context_name)
    // props value pass and receive as a array 
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Special</h4>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;