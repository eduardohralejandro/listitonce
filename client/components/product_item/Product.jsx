import React, { Fragment, useState } from 'react';
import {  useMutation } from 'urql';

import UPDATE_PRODUCT from './UPDATE_PRODUCT.graphql';


const Employee = ({ item }) => {
    const [ product, setProduct ] = useState("");
    const [ res, executeMutation ] = useMutation(UPDATE_PRODUCT);
 
    const saveProduct = (e, item) => {
        console.log(item)
        e.preventDefault();

        executeMutation( { id: item.id, data: { employee: item.employee, product,
        price: item.price, bought: item.bought } } );

        setProduct("");

    }

    const handleChange = (e) => {
        setProduct(e.target.value);
    }
    
    return (
        <Fragment>
            <form onSubmit={(e) => saveProduct(e, item)}>
                <input placeholder="product" value={product}  onChange={(e) => handleChange(e)}  type="text" /> 
            </form>     
        </Fragment>
    );  
};


export default Employee;