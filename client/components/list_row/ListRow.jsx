import React, { useState } from 'react';
import { useMutation } from 'urql';

import CheckItem from '../bought_item/CheckItem';
import Employee from '../employee_item/Employee';
import Product from '../product_item/Product';
import Price from '../price_item/Price';
import UPDATE_INFO from './UPDATE_INFO.graphql';


const ListRow = ({ children, listTitle }) => {

    const [ inputValues, setInputValues ] = useState({
        price: '', 
        employee: '',
        product: '', 
    });

    const [ res, executeMutation ] = useMutation(UPDATE_INFO);

    const save = (e, item) => {
        e.preventDefault();

        const numberPrice = Number(inputValues.price);

        executeMutation( { id: item.id, data: { employee: inputValues.employee, product: inputValues.product, price: numberPrice, bought: item.bought, saved: true } } );

        setInputValues("");
        res;
    }

    const handleChange = event => {

        const { name, value } = event.target;
        
        setInputValues( { ...inputValues, [name]: value } );
    };

    return (
        <div style={ { backgroundColor:"blue" } }>
            <h1>{listTitle}</h1>
            {children.map((element) => {
                return (
                    <div key={element.id}>
                         <h1>{children.listTitle}</h1>
                        {element.bought  && !element.saved
                            ?
                            <button onClick={(e) => save(e, element)}>save</button>
                            :
                            null
                        }                        

                        {element.bought && !element.saved ? 
                            <Price handleChange={handleChange}  item={element} />
                            :
                            element.price
                        }
                        {element.bought && !element.saved  ? 
                            <Product handleChange={handleChange} item={element} />
                            :
                            element.product
                        }
                        {element.bought  && !element.saved ? 
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