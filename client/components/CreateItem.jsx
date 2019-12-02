import React, { useState } from 'react';
import { useMutation } from 'urql';
import gql from 'graphql-tag';


const createItem = gql`
  mutation createItem($title: String!) {
    createItem(title: $title) {
      id
      title
    }
  }
`;

const CreateItem = () => {

  const [title, setTitle] = useState("");

  const [res, executeMutation] = useMutation(createItem);

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


export default CreateItem;