import './deleteTaskBucket.scss';
import bucket from './../../images/trash.jpg';

export function DeleteTaskBucket() {
    return (
        <div className="imageBox">
            <img alt='delete task' src={bucket} />
        </div>
    )
}