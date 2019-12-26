import React, { Fragment } from 'react';


const RenderRecipes = ({ foodRecipes }) => {
    return (
        <Fragment>
            {foodRecipes?.map((food, index) => {
                return (
                    <div>
                       <h3>{food.recipe.label}</h3>
                       <img key={index} src={food.recipe.image} alt="recipes" />
                       {food.recipe.ingredientLines.map((ingredient, index) => {
                           return (
                               <p key={index}>{ingredient}</p>
                           );
                       })}
                    </div>
                );
            })}
        </Fragment>
    );
};


export default RenderRecipes;