import React, { Fragment } from 'react';
import {  useMutation } from 'urql';

import UPDATE_PRODUCT_INFO from './UPDATE_PRODUCT_INFO.graphql';


const CheckItem = ({ item }) => {

    const [ res, executeMutation ] = useMutation(UPDATE_PRODUCT_INFO);
 
    const open = (item) => {
  
        if (item.bought) {
            executeMutation( { id: item.id, data: { bought: false } } );
        } 
        else if (!item.bought) {
            executeMutation( { id: item.id, data: { bought: true } } );
        }

        res;
    }
    
    return (
        <Fragment>
            <input checked={item.bought} onChange={() => open(item)}  type="checkbox" />      
        </Fragment>
    );  
};


export default CheckItem;