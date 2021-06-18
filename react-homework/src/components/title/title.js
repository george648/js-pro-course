import React from 'react';

export function Title({toDoItem}) {
    return (
        <h3>
            {toDoItem.title}
        </h3>
    )
}