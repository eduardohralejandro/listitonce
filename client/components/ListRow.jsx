import React from 'react';


const ListRow = ({ children, listTitle }) => {
    return (
        <div style={{backgroundColor:"blue"}}>
            <h1>{listTitle}</h1>
            {children.map((element) => {
                return (
                    <div key={element.id}>
                        <h1>{children.listTitle}</h1>
                        {element.title}
                        {element.employee}
                        {element.bought}
                        {element.product}
                    </div>
                );
            })}
        </div>
    );  
};


export default ListRow;