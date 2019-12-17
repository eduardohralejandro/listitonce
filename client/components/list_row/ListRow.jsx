import React from 'react';

import CheckItem from '../bought_item/CheckItem'

const ListRow = ({ children, listTitle }) => {
    return (
        <div style={{backgroundColor:"blue"}}>
            <h1>{listTitle}</h1>
            {children.map((element) => {
                return (
                    <div key={element.id}>
                        <h1>{children.listTitle}</h1>
                        {element.employee}
                        {element.bought}
                        {element.product}
                        <CheckItem item={element} />
                    </div>
                );
            })}
        </div>
    );  
};


export default ListRow;