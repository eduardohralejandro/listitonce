import React from 'react';
import PropTypes from 'prop-types';


const Lists = ({ title }) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

Lists.propTypes = {
    title: PropTypes.string,
};


export default Lists;