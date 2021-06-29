import './Tag.scss';

export const Tag = ({label, deleteTagButton}) => {
    return (
        <div className="tagItem">
            <span className="tagLabel">{label}</span>
            <button onClick={()=> deleteTagButton(label)} className="tagButton">x</button>
        </div>
    )
}