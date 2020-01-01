import React, { Fragment } from 'react';

import styles from "./employee.module.scss";


const Employee = ({ handleChange }) => {
    return (
        <Fragment>
            <input className={styles.inputEmployee} name="employee" placeholder="Employee" onChange={(e) => handleChange(e)}  type="text" />  
        </Fragment>
    );  
};


export default Employee;