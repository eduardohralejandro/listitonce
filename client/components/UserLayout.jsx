import React, { Fragment } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

import CreateItem from './CreateItem';
import Items from './Items';
import ListTitle from './ListTitle';
import SaveList from './SaveList';


const GetLists = gql`
  query {
    list { 
        listTitle 
        id
        items {
            id 
            title 
            employee 
            product
            bought
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
                {data.list.map((list) => {
                    return (
                        <Fragment key={list.id}>
                            <ListTitle title={list.listTitle} />
                            <Items items={list.items} />
                        </Fragment>
                    );
                })}
            </Fragment>
        );
    }
};


export default UserLayout;