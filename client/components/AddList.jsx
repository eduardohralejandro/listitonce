import React, { useState } from 'react';
import { useMutation } from 'urql';
import gql from 'graphql-tag';


const createList = gql`
  mutation createList($title: String!) {
    createList(title: $title) {
      id
      title
    }
  }
`;

const AddList = () => {

  const [title, setTitle] = useState("");

  const [res, executeMutation] = useMutation(createList);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const addTitle = (e) => {

    e.preventDefault();

    executeMutation({ title });
  };

  if (res.error) {
    return 'oh no, this is infinity -> ...';
  }
  else {
    return (
      <div>
        <form onSubmit={(e) => addTitle(e)}>
          <input onChange={(e) => handleOnChange(e)} />
          <button>add</button>
        </form>
      </div>
    );
  }
};


export default AddList;