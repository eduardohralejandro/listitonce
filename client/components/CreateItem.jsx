import React, { useState } from 'react';
import { useMutation } from 'urql';
import gql from 'graphql-tag';


const createItem = gql`
  mutation createItem($product: String!) {
    createItem(product: $product) {
      id
      product
    }
  }
`;

const CreateItem = () => {

  const [product, setProduct] = useState("");

  const [res, executeMutation] = useMutation(createItem);

  const handleOnChange = (e) => {
    setProduct(e.target.value);
  };

  const addTitle = (e) => {

    e.preventDefault();

    executeMutation({ product });
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