import React, { useState } from 'react';
import { useMutation } from 'urql';

import SAVE_LISTS from './SAVE_LISTS.graphql';


const SaveList = () => {

  const [ title, setTitle ] = useState("");

  const [ res, executeMutation ] = useMutation(SAVE_LISTS);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

    if (res.error) {
        return 'error';
    } 
    else {
        return (
            <div>
                <h1>save list</h1>
                <input onChange={(e) => handleChange(e)} placeholder="List title" />
                <button onClick={() => executeMutation({ listTitle: title })}>save list</button>
            </div>
        );
    }
    
};


export default SaveList;