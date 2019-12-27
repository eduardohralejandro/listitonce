import React, { useState, Fragment } from 'react';
import { useMutation } from 'urql';

import SAVE_LISTS from './SAVE_LISTS.graphql';
import CreateItem from '../create_item/CreateItem';


const SaveList = ({ updated }) => {

  const [ title, setTitle ] = useState("");
  const [ error, setError ] = useState("");
  const [ display, setDisplay ] = useState("");

  const [ res, executeMutation ] = useMutation(SAVE_LISTS);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const saveNewList = () => {
    if (title.length === 0) {
        setError("you must add a valid list title");
    } 
    else {
        executeMutation({ listTitle: title });
        setTitle("");
        updated();
        setError("");
        setDisplay(false);
    }
  };

  const displyInput = () => {
      setDisplay(true)
  }
    
    if (res.error) {
        return 'error';
    } 
    else {
        return (
            <div>
                <button onClick={displyInput}>Create new list</button>
                {do {
                    if (display) {
                       return (
                        <Fragment>
                            <input value={title} onChange={(e) => handleChange(e)} placeholder="List title" />
                            <button onClick={saveNewList}>save list</button>
                            {error}
                            <CreateItem />
                        </Fragment>
                       ); 
                    } 
                }}
            </div>
        );
    }
    
};


export default SaveList;