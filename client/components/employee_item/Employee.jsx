import React, { Fragment, useState } from 'react';
import {  useMutation } from 'urql';

import UPDATE_EMPLOYEE from './UPDATE_EMPLOYEE.graphql';


const Employee = ({ item }) => {
    const [ employee, setEmployee ] = useState("");
    const [ res, executeMutation ] = useMutation(UPDATE_EMPLOYEE);
 
    const saveEmployee = (e, item) => {
        e.preventDefault();

        executeMutation( { id: item.id, data: { employee, product: item.product,
        price: item.price, bought: item.bought } } );

        setEmployee("");
        
    }

    const handleChange = (e) => {
        setEmployee(e.target.value);
    }
    
    return (
        <Fragment>
            <form onSubmit={(e) => saveEmployee(e, item)}>
                <input placeholder="Employee" value={employee}  onChange={(e) => handleChange(e)}  type="text" /> 
            </form>     
        </Fragment>
    );  
};


export default Employee;