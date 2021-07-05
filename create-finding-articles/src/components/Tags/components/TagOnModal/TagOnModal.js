import { tagsMock } from './../../../../tags';
import { useState } from 'react';
import { StyledTag } from './../Tag/styled'

export const TagOnModal = () => {

    const [tags, setTags] = useState(tagsMock);
    const [isTagOpened, setTagIsOpened] = useState(false);
    const [isTagChose, setTagIsChose] = useState(false);
    const [isTagId, setTagId] = useState('');

    const chooseTagHandler = (event) => {

    };


    return (
        <div className="tagOnModal">
            <span>Add tag</span>
            <select name="tags" onChange={chooseTagHandler}>
                {tags.map((tag) => <option>{tag.label}</option>)}      
            </select>
            {!isTagChose &&
                <StyledTag tag="tag" />
            }
        </div>
    )
}

// const handleSelect = (e) => {
//     onFilter(e.target.value);
//   }

//   const uniqueAuthors = Array.from(new Set(authors));

//   return (
//     <div className="articles__author-filter">
//       By author:
//       <select onChange={handleSelect} name="authors" id="authors">
//         <option value="">All</option>
//         {uniqueAuthors.map((author) => {
//           return (
//             <option value={author} key={author}>{author}</option>
//           )
//         })}
//       </select>
//     </div>
//   )