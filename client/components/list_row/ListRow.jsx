import React, { useState, Fragment } from "react";
import { useMutation } from "urql";

import CheckItem from "../bought_item/CheckItem";
import Employee from "../employee_item/Employee";
import Product from "../product_item/Product";
import Price from "../price_item/Price";
import UPDATE_INFO from "./UPDATE_INFO.graphql";


const ListRow = ({ children, listTitle }) => {

    const [ inputValues, setInputValues ] = useState({
        price: "", 
        employee: "",
        product: "", 
    });

    const [ errorMessage, setErrorMessage ] = useState("");

    const [ res, executeMutation ] = useMutation(UPDATE_INFO);

    const save = (e, item, displayInput) => {

        e.preventDefault();
 
        const numberPrice = Number(inputValues.price);

        if (!inputValues || inputValues.product.length === 0 && item.product.length === 0 || inputValues.employee.length === 0  && item.employee.length === 0 || inputValues.price.length === 0 && item.price.length === 0) {
            setErrorMessage("Must provide required information");    
        } 
        else if (displayInput) {
       
            executeMutation( { id: item.id, data: { 
            employee: inputValues.employee, 
            product: inputValues.product, 
            price: numberPrice, 
            bought: item.bought, 
            saved: true } } );

            setInputValues("");
            setErrorMessage("");
            res;
        }
        
    }

    const handleChange = event => {

        const { name, value } = event.target;
        
        setInputValues( { ...inputValues, [name]: value } );
    };

    return (
        <div style={ { backgroundColor:"blue" } }>
            <h1>{listTitle}</h1>
            
            {children.map((element) => {

               const displayInput = element.bought && !element.saved || !element.bought && element.saved;

                return (
                    <div key={element.id}>
                         <h1>{children.listTitle}</h1>
                        
                        {
                            do { if (displayInput) {
                                return (
                                    <Fragment>
                                    {errorMessage}
                                        <button onClick={(e) => save(e, element, displayInput)}>save</button>
                                    </Fragment>   
                                );
                            }}    
                        }
                        
                        {displayInput ? 
                            <Price handleChange={handleChange}  item={element} />
                            :
                            `${element.price}€`
                        }
                        {displayInput ? 
                            <Product handleChange={handleChange} item={element} />
                            :
                            element.product
                        }
                        {displayInput ? 
                             <Employee handleChange={handleChange} item={element} />
                            :
                            element.employee
                        }
                        <CheckItem item={element} />
                    </div>
                );
            })}
        </div>
    );  
};


export default ListRow;