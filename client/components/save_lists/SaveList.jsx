import React, { useState } from 'react';
import { useMutation } from 'urql';

import SAVE_LISTS from './SAVE_LISTS.graphql';


const SaveList = ({ updated }) => {

  const [ title, setTitle ] = useState("");
  const [ error, setError ] = useState("");

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
    }
  };
    
    if (res.error) {
        return 'error';
    } 
    else {
        return (
            <div>
                <input value={title} onChange={(e) => handleChange(e)} placeholder="List title" />
                <button onClick={saveNewList}>save list</button>
                {error}
            </div>
        );
    }
    
};


export default SaveList;