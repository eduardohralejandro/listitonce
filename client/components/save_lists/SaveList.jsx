import React, { useState } from 'react';
import { useMutation } from 'urql';
import styles from '../save_lists/savelists.module.scss';

import SAVE_LISTS from './SAVE_LISTS.graphql';
import CreateItem from '../create_item/CreateItem';


const SaveList = ({ updated, list, display, displayInput, itemProps }) => {

  const [ title, setTitle ] = useState("");
  const [ error, setError ] = useState("");

  const [  res , executeMutation ] = useMutation(SAVE_LISTS);

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
                <div className={styles.displyInputContainer}>
                    <button className={styles.btnDisplayInput} onClick={displayInput}>+ Create new list</button>
                </div>
                {
                    do {
                        if (display || list[0].items.length > 0) {
                            <div className={styles.createListBox}>
                                <input value={title} onChange={(e) => handleChange(e)} placeholder="List title" />
                                <button onClick={saveNewList}>save list</button>
                                {error}
                                <CreateItem />
                            </div>
                        }
                    }
                }
                {
                    do {
                        if (!display && itemProps?.length === 0 && list[0].items.length === 0) {
                            <div className={styles.createListBox}>
                                <img alt='items' src={"https://svgshare.com/i/FS_.svg"} />
                                <p>Your items will be here</p>
                            </div>
                        }
                    }
                }
            </div>
        );
    }
    
};


export default SaveList;