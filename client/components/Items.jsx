import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DeleteItem from './DeleteItem';


const Items = ({ items }) => {
    return (
        <div>
            {items.map((item) => {
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
        title: PropTypes.string.isRequired,
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