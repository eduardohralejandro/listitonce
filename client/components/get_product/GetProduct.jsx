import React, { useState, useEffect } from 'react';
import { useQuery } from 'urql';

import GET_PRODUCT from './GET_PRODUCT.graphql';
import SelectRecipes from '../select_recipes/SelectRecipes';


const GetProduct = () => {
    
    const [ options , setOptions ] = useState([]);
    const [ res ] = useQuery({
        query: GET_PRODUCT,
    });

    useEffect(() => {

        const fetchData = async () => {

            if (res.fetching) {
                return "loading..."
            } 
            else {
                await res.data.savedList.map((product) => {
                    return (product.items.map((productInfo) => {
        
                        const newOptions = { value: productInfo.product, label: productInfo.product }
        
                        setOptions(oldOptions => [...oldOptions,  newOptions ]);
                        
                        return productInfo;
                    }));
                });
            }
        }

        fetchData();
        
    }, []);

    if (res.fetching){
        return "loading.."
    }  
    else {
        return (
            <SelectRecipes options={options} />
        );
    }
};


export default GetProduct;