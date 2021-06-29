export const AddButtonTag = ({disabled, addTagHandler}) => {
    return (
        <button disabled={disabled} onClick={addTagHandler}>Add tag</button>
    )
}