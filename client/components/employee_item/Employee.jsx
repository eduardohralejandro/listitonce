import React, { Fragment } from 'react';


const Employee = ({ handleChange }) => {
    return (
        <Fragment>
            <input name="employee" placeholder="Employee" onChange={(e) => handleChange(e)}  type="text" />  
        </Fragment>
    );  
};


export default Employee;