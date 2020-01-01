import React, { Fragment } from 'react';


import styles from '../render_recipes/renderrecipes.module.scss';

const RenderRecipes = ({ foodRecipes }) => {
    return (
        <Fragment>
            <div className={styles.recipe}>
                {foodRecipes?.map((food, index) => {
                    const ingredient = food.recipe.ingredientLines.join(' ');
                    return (
                        <div className={styles.recipeBox} key={index}>
                            <h3>{food.recipe.label}</h3>
                            <div className={styles.recipeContainer}>
                                <img key={index} src={food.recipe.image} alt="recipes" />
                                {ingredient}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};


export default RenderRecipes;