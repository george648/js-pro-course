export const Select = ({ author, onFilterAuthor }) => {
  const selectAuthor = (event) => {
    onFilterAuthor(event.target.value)
  }
  return (
    <div>
      Search by author
      <select onChange={selectAuthor} name="authors" id="author">
        <option value="">
          All
        </option>
        {author.map((authorOfArticle) => {
          return (
            <option value={authorOfArticle} > {authorOfArticle} </option>)
          })}
      </select>
    </div>
  )
}