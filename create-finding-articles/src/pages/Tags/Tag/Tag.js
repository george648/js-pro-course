import './Tag.scss';

export const Tag = ({label, eventTarget}) => {
    return (
        <div className="tagItem">
            <span onClick={eventTarget} className="tagLabel">{label}</span>
            <button onChange={eventTarget} className="tagButton">x</button>
        </div>
    )
}