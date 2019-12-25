import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <Fragment>
            <Link to="/">
                dahshboard
            </Link>
            <Link to="/recipes">
                recipes
            </Link>
        </Fragment>
    );
};


export default Navbar;