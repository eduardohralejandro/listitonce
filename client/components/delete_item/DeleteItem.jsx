import React from 'react';
import { useMutation } from 'urql';
import PropTypes from 'prop-types';

import DELETE_ITEM from './DELETE_ITEM.graphql';


const DeleteItem = ({ id }) => {

  const [ res, executeMutation ] = useMutation(DELETE_ITEM);

  if (res.error) {
    return 'oh error';
  }
  else {
    return (
      <div>
        <button onClick={() => executeMutation({ id })}>delete</button>
      </div>
    );
  }
};

DeleteItem.propTypes = {
    id: PropTypes.string,
};


export default DeleteItem;