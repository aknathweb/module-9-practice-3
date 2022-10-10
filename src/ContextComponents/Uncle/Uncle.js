import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    // Context data use by using useContext(Context_name)
    // props value pass and receive as a array 
    // const [money, setMoney] = useContext(MoneyContext);
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>House:{house}</small></p>
            <p><small>Money: {money}</small></p>
        </div>
    );
};

export default Uncle;