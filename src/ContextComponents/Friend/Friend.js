import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    // Context data use by using useContext(Context_name)
    // props value pass and receive as a array 
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Friend</h4>
            <p><small>house: {house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;