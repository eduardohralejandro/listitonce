import React, { Fragment } from 'react';


const Employee = ({ handleChange }) => {
    
    return (
        <Fragment>
            <input name="product" placeholder="product"  onChange={(e) => handleChange(e)}  type="text" />  
        </Fragment>
    );  
};


export default Employee;