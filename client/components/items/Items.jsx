import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DeleteItem from '../delete_item/DeleteItem';


const Items = ({ displayItems, items }) => {
    return (
        <div>
            {displayItems && items.map((item) => {
                return (
                    <Fragment key={`${item.id}`}>
                        <h1>{item.product}</h1>
                        <DeleteItem id={item.id} />
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