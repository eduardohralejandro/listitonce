import React from 'react';
import { useMutation } from 'urql';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';


const deleteItem = gql`
  mutation deleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
      title
    }
  }
`;

const DeleteItem = ({ id }) => {

    const [res, executeMutation] = useMutation(deleteItem);

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