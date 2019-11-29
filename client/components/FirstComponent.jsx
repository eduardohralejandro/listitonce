import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

import AddList from './AddList';


const GetLists = gql`
  query {
    lists{
        id
        title
    }
  }
`;

const FirstComponent = () => {
    const [res] = useQuery({
        query: GetLists,
    });

    if (res.fetching) {
        return 'loading...';
    }
    else {
        return (
            <div>
                {res.data.lists.map((list) => {
                    return (
                        <div key={list.id}>
                            {list.title}
                        </div>
                    )
                })}
                <AddList />
            </div>
        );
    }
};


export default FirstComponent;