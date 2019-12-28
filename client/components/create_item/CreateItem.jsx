import React, { useState } from 'react';
import { useMutation } from 'urql';

import styles from "../create_item/createitem.module.scss";
import CREATE_ITEM from './CREATE_ITEM.graphql';


const CreateItem = () => {

  const [ product, setProduct ] = useState("");
  const [ error, setError ] = useState("");

  const [ res, executeMutation ] = useMutation(CREATE_ITEM);

  const handleOnChange = (e) => {
    setProduct(e.target.value);
  };
  
  const addTitle = (e) => {

    e.preventDefault();
    if (product.length === 0) {
        setError("you must send a valid item");
    } 
    else {
        executeMutation({ product });
        setProduct("");
        setError("");
    }
  };

  if (res.error) {
    return 'oh no, something went wrong, try again ...';
  }
  else {
    return (
      <div>
        <form onSubmit={(e) => addTitle(e)}>
          <input placeholder="+ Add Item" className={styles.itemInput} value={product} onChange={(e) => handleOnChange(e)} />
        </form>
        {error}
      </div>
    );
  }
};


export default CreateItem;