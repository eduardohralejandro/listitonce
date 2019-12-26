import React, { useState } from 'react';
import Select from "react-select";
import axios from 'axios';

import RenderRecipes from '../render_recipes/RenderRecipes';

const SelectRecipes = ({ options }) => {

    const [ foodRecipes, setFoodRecipes ] = useState(null);
    const [ loader, setLoader ] = useState(false);

    const handleChange = async (ingredient) => {
        
        const APP_ID = process.env.APP_ID;
        const APP_KEY =  process.env.APP_KEY;
      
        const url = `https://api.edamam.com/search?q=${ingredient.value}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        setLoader(true);
        
        try {

            const data = await axios.get(url);

            if (data) {
                setLoader(false);
                setFoodRecipes(data.data.hits);
            } 
        }
        catch (e) {
            throw new Error("unable to get recipes, try again", e);
        }   
    }

    return (
        <div> 
            <h1>Select Recipes</h1>
            <Select onChange={handleChange} options={options} />
            {loader ? "loading..." : <RenderRecipes foodRecipes={foodRecipes} />}
        </div>
    );
};


export default SelectRecipes;