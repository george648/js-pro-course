import { Title } from '../title/title';
import { Tools } from '../tools/tools';

export function ListItem({toDoItem, completeTask}) {
    return (
        <div className="row">
            <Title toDoItem={toDoItem} />
            <Tools completeTask={completeTask} toDoItem={toDoItem} />
        </div>
    )
}