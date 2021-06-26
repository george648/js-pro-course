export const SearchInput = ( {onSearchDescriptionInput} ) => {

    const searchDescriptonInput = (event) => {
        onSearchDescriptionInput(event.target.value)
    }

    return ( 
        <input type="search" placeholder="Search words in description..." onChange={searchDescriptonInput} />
    )
}