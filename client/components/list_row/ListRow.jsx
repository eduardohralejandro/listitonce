import React from 'react';

import CheckItem from '../bought_item/CheckItem';


const ListRow = ({ children, listTitle }) => {

    return (
        <div style={ { backgroundColor: "blue" } }>
            <h1>{listTitle}</h1>
            {children.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{children.listTitle}</h1>
                        {item.employee}
                        {item.product}
                        <CheckItem  item={item} />
                    </div>
                );
            })}
        </div>
    );  
};


export default ListRow;