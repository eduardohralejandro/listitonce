import React, { Fragment } from 'react';

import styles from '../product_item/product.module.scss';


const Employee = ({ handleChange }) => {
    
    return (
        <Fragment>
            <input className={styles.productInput} name="product" placeholder="product"  onChange={(e) => handleChange(e)}  type="text" />  
        </Fragment>
    );  
};


export default Employee;