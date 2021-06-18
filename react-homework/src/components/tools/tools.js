import React from 'react';
import { CompleteTask } from './../completeTask/completeTask';
import { EditPencil } from './../editPencil/editPencil';
import { DeleteTaskBucket } from './../DeleteTaskBucket/DeleteTaskBucket';
import './tools.scss'

export function Tools({toDoItem, completeTask}) {
    return (
        <div className="toolsBox">
            <CompleteTask toDoItem={toDoItem} completeTask={completeTask} />
            <EditPencil />
            <DeleteTaskBucket />
        </div>
    )
}