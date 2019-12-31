import React from 'react';
import { useMutation } from 'urql';
import PropTypes from 'prop-types';

import DELETE_ITEM from './DELETE_ITEM.graphql';
import styles from '../delete_item/deleteitem.module.scss';


const DeleteItem = ({ id }) => {

  const [ res, executeMutation ] = useMutation(DELETE_ITEM);

  if (res.error) {
    return 'oh error';
  }
  else {
    return (
      <div className={styles.bin}>
        <img width="15" alt='deleteitem' onClick={() => executeMutation({ id })} src='https://svgshare.com/i/FSv.svg' />
      </div>
    );
  }
};

DeleteItem.propTypes = {
    id: PropTypes.string,
};


export default DeleteItem;