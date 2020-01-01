import React, { Fragment } from 'react';

import styles from '../price_item/price.module.scss';


const Price = ({ handleChange }) => {
    return (
        <Fragment>
            <input className={styles.priceInput} name="price" placeholder="Price" onChange={(e) => handleChange(e)}  type="text" />      
        </Fragment>
    );  
};


export default Price;