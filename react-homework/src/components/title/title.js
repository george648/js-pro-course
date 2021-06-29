import './title.scss';

export function Title({toDoItem}) {
    return (
        <h3 className="completed">
            {toDoItem.title}
        </h3>
    )
}