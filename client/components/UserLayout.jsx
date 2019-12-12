import React, { Fragment } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

import CreateItem from './CreateItem';
import Items from './Items';
import SaveList from './SaveList';
import RenderLists from './RenderLists';


const GetLists = gql`
  query {
    list { 
        items {
            id 
            product 
            bought 
            employee  
        }
    }
}
`;

const UserLayout = () => {

    const [res] = useQuery({
        query: GetLists,
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
                        <Fragment key={list.id + "3"}>
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