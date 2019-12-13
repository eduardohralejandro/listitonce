import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

import ListRow from './ListRow';


const savedLists = gql`
  query {
    savedList {
      id
      listTitle
      items {
          id 
          employee 
          product 
          bought
          }
    }
  }
`;

const RenderLists = () => {
    
    const [res] = useQuery({
        query: savedLists,
    });
    
    const { data } = res;

    if (res.fetching) {
        return 'fetching...';
    }
    else {
        return (
            <div>
                {data.savedList.map((list) => {
                   return (
                    <div key={list.id}>
                        <ListRow  listTitle={list.listTitle}>
                            {list.items}
                        </ListRow>
                    </div>
                   );
                })}
            </div>
        );
    }
};


export default RenderLists;