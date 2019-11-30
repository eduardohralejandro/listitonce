import React, { Fragment } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

import AddList from './AddList';
import Lists from './Lists';
import DeleteList from './DeleteList';


const GetLists = gql`
  query {
    lists {
        id
        title
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
                {data.lists.map((list) => {
                    return (
                        <Fragment key={list.id}>
                            <Lists title={list.title} />
                            <DeleteList id={list.id} />
                        </Fragment>
                    );
                })}
                <AddList />
            </Fragment>
        );
    }
};


export default UserLayout;