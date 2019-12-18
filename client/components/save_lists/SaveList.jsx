import React, { useState } from 'react';
import { useMutation } from 'urql';

import SAVE_LISTS from './SAVE_LISTS.graphql';


const SaveList = ({ updated }) => {

  const [ title, setTitle ] = useState("");

  const [ res, executeMutation ] = useMutation(SAVE_LISTS);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const saveNewList = () => {
    executeMutation({ listTitle: title });
    setTitle("");
    updated();
  };
    
    if (res.error) {
        return 'error';
    } 
    else {
        return (
            <div>
                <h1>save list</h1>
                <input value={title} onChange={(e) => handleChange(e)} placeholder="List title" />
                <button onClick={saveNewList}>save list</button>
            </div>
        );
    }
    
};


export default SaveList;