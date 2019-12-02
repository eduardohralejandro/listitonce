import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'urql';


const saveList = gql`
  mutation saveList($listTitle: String!) {
    saveList(listTitle: $listTitle) {
        listTitle
    }
  }
`;

const SaveList = () => {

  const [title, setTitle] = useState("");

  const [res, executeMutation] = useMutation(saveList);

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