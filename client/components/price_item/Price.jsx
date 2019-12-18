import React, { Fragment, useState } from 'react';
import {  useMutation } from 'urql';

import UPDATE_PRICE from './UPDATE_PRICE.graphql';


const Price = ({ item }) => {
    const [ price, setPrice ] = useState("");
    const [ res, executeMutation ] = useMutation(UPDATE_PRICE);
 
    const savePrice = (e, item) => {
        e.preventDefault();

        const numberPrice = Number(price);
     
        executeMutation( { id: item.id, data: { employee: item.employee, 
           price: numberPrice, product: item.product, bought: item.bought } } );

        setPrice("");
    }

    const handleChange = (e) => {
        setPrice(e.target.value);
    }
    
    return (
        <Fragment>
            <form onSubmit={(e) => savePrice(e, item)}>
                <input placeholder="Price" value={price}  onChange={(e) => handleChange(e)}  type="text" /> 
            </form>
            <h2>{item.price}</h2>     
        </Fragment>
    );  
};


export default Price;