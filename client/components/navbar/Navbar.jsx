import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbarFragment}>
            <Link className={styles.link} to="/">
                <img alt='brand-logo' src='https://svgshare.com/i/FUq.svg' />
            </Link>
            <Link className={styles.link} to="/">
                <h3>Dashboard</h3>
            </Link>
            <Link className={styles.link} to="/recipes">
                <h3>Recipes</h3>
            </Link>
        </div>
    );
};


export default Navbar;