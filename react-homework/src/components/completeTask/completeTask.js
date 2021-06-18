export function CompleteTask({toDoItem, completeTask}) {
    return (
        <input type='checkbox' onChange={() => completeTask(toDoItem.id)} />
    )
}