import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.scss";

const Navbar = () => {

    return (
        <Fragment>
            <Link to="/">
                dahshboard
            </Link>
            <Link to="/recipes">
                recipes
            </Link>
            <h1 className={styles.word} >hello</h1>
        </Fragment>
    );
};


export default Navbar;