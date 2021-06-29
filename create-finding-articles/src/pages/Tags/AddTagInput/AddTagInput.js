export const AddTagInput = ({ label, newTagInput }) => {
    return (
        <input label={label} onChange={newTagInput} />
    )
}