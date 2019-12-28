import React, { Fragment, useState } from 'react';
import { useQuery } from 'urql';

import Items from '../items/Items';
import SaveList from '../save_lists/SaveList';
import RenderLists from '../render_lists/RenderLists';
import GET_LISTS from './GET_LISTS.graphql';


const UserLayout = () => {

    const [ displayItems, setDisplayItems ] = useState(true);
    const [ display, setDisplay ] = useState(false);
    const [ itemProps, setItemProps ] = useState(null);

    const [ res ] = useQuery({
        query: GET_LISTS,
    });
    
    const { data } = res;
  
    const updated = () => {
        data.list.map((list) => {
            if (list.items.length > 0) {
                setDisplayItems(false)
            }
            return list;
        });
         setDisplay(false);
        /** update layout items after saving list */
    }

    const displayInput = () => {
        setDisplay(true);
    }

    const showInputs = (item) => {
        setItemProps(item)
    }

    if (res.fetching) {
        return 'loading...';
    }
    else {
        return (
            <Fragment>
                <SaveList itemProps={itemProps} list={data.list} displayInput={displayInput} display={display} updated={updated} />
                {data?.list.map((list) => {
                    return (
                        <Fragment key={list.id}>
                            {do {
                                if (list?.items.length > 0) {
                                    <Items items={list.items}  displayItems={displayItems} />
                                }
                            }}
                        </Fragment>
                    );
                })}
                <RenderLists show={showInputs}  />
            </Fragment>
        );
    }
};


export default UserLayout;