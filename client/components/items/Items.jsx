import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DeleteItem from '../delete_item/DeleteItem';
import styles from "./items.module.scss";


const Items = ({ displayItems, items }) => {
    return (
        <div className={styles.itemContainer}>
            {displayItems && items.map((item) => {
                return (
                    <Fragment key={item.id}>
                        <p>{item.product}</p>
                        <div>
                            <DeleteItem id={item.id} />
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        product:  PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.oneOf([null]),
          ]),
        employee:  PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.oneOf([null]),
          ]),
        bought:PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf([null]),
          ]),
    })).isRequired,
};


export default Items;