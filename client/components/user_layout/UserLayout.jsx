import React, { Fragment } from 'react';
import { useQuery } from 'urql';

import CreateItem from '../create_item/CreateItem';
import Items from '../items/Items';
import SaveList from '../save_lists/SaveList';
import RenderLists from '../render_lists/RenderLists';
import GET_LISTS from './GET_LISTS.graphql';


const UserLayout = () => {

    const [ res ] = useQuery({
        query: GET_LISTS,
    });
    const { data } = res;

    if (res.fetching) {
        return 'loading...';
    }
    else {
        return (
            <Fragment>
                <SaveList />
                <CreateItem />
                {data.list && data.list.map((list) => {
                    return (
                        <Fragment key={list.id}>
                            <Items items={list.items} />
                        </Fragment>
                    );
                })}
                <RenderLists />
            </Fragment>
        );
    }
};


export default UserLayout;