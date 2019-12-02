import React from 'react';
import PropTypes from 'prop-types';


const ListTitle = ({ title }) => {

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

ListTitle.propTypes = {
    listTitle: PropTypes.string,
};


export default ListTitle;