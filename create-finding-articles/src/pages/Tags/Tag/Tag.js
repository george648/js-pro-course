import './Tag.scss';

export const Tag = ({label, deleteTag}) => {
    return (
        <div className="tagItem">
            <span className="tagLabel">{label}</span>
            <button onClick={()=> deleteTag(label)} className="tagButton">x</button>
        </div>
    )
}