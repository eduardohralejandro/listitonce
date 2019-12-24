import React, { Fragment } from 'react';


const Price = ({ handleChange }) => {
    return (
        <Fragment>
            <input name="price" placeholder="Price" onChange={(e) => handleChange(e)}  type="text" />      
        </Fragment>
    );  
};


export default Price;