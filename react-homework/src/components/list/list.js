import React from 'react';
import './list.scss';
import { ListItem } from '../listItem/ListItem';

function List({todoList,completeTask}) {
    return (
        <>
            {todoList.map((toDoItem)=> <ListItem toDoItem={toDoItem} key={toDoItem.id} completeTask={completeTask} />)}
        </>
    )
}

export default List