import React from 'react';
import { useQuery } from 'urql';

import ListRow from '../list_row/ListRow';
import RENDER_LISTS from './RENDER_LISTS.graphql';


const RenderLists = () => {
    
    const [ res ] = useQuery({
        query: RENDER_LISTS,
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