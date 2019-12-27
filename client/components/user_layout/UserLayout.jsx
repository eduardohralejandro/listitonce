import React, { Fragment, useState } from 'react';
import { useQuery } from 'urql';

import Items from '../items/Items';
import SaveList from '../save_lists/SaveList';
import RenderLists from '../render_lists/RenderLists';
import GET_LISTS from './GET_LISTS.graphql';


const UserLayout = () => {

    const [ displayItems, setDisplayItems ] = useState(true);

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
        /** update layout items after saving list */
    }

    if (res.fetching) {
        return 'loading...';
    }
    else {
        return (
            <Fragment>
                <SaveList  updated={updated} />
                {data.list && data.list.map((list) => {
                    return (
                        <Fragment key={list.id}>
                            <Items items={list.items}  displayItems={displayItems} />
                        </Fragment>
                    );
                })}
                <RenderLists />
            </Fragment>
        );
    }
};


export default UserLayout;