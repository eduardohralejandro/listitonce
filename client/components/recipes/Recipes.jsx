import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { useQuery } from 'urql';

import GET_PRODUCT from './GET_PRODUCT.graphql';


const Recipes = () => {
    const [ options , setOptions ] = useState([]);
    const [ res ] = useQuery({
        query: GET_PRODUCT,
    });

    useEffect(() => {
       res.data.savedList.map((product) => {
            return (product.items.map((productInfo) => {

                const newOptions = { value: productInfo.product, label: productInfo.product }

                setOptions(oldOptions => [...oldOptions,  newOptions ]);
                
                return productInfo;
            }));
        });
    }, []);

    if (res.fetching){
        return "loading.."
    }  
    else {
        return (
            <div> 
                <p>recipes</p>
                <Select />
            </div>
        );
    }
};


export default Recipes;