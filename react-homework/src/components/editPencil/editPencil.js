import './editPencil.scss';
import pencil from './../../images/penEdit.png'

export function EditPencil() {

    console.log(pencil);
    return (
        <div className="imageBox">
            <img alt='edit info' src={pencil} />
        </div>
    )
}