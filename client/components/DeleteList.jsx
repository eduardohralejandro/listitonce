import React from 'react';
import { useMutation } from 'urql';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';


const deleteList = gql`
  mutation deleteList($id: ID!) {
    deleteList(id: $id) {
      id
      title
    }
  }
`;

const DeleteList = ({ id }) => {

    const [res, executeMutation] = useMutation(deleteList);

    if (res.error) {
        return 'oh error';
    }
    else {
        return (
            <div>
                <button onClick={() => executeMutation({ id: id })}>delete</button>
            </div>
        );
    }
};

DeleteList.propTypes = {
    id: PropTypes.string,
};

export default DeleteList;