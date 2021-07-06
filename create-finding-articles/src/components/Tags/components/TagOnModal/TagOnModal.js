import { tagsMock } from './../../../../tags';
import { useState } from 'react';
import { StyledTag } from './../Tag/styled';
import cross from './../Tag/cross.svg';

export const TagOnModal = () => {
    const [tags, setTags] = useState(tagsMock);
    const [tagOnScreen, setTagOnScreen] = useState([]);
    const uniqueTags = Array.from(new Set(tagOnScreen)) 

    const choosingTag = (event) => {
        setTagOnScreen(
            [
                event.target.value,
                ...uniqueTags, 
            ]
            )
    };

    const deleteTag = (event) => {
        setTagOnScreen([]);
    };

    return (
        <div className="tagOnModal">
            <span>Add tag</span>
            <select name="tags" onChange={choosingTag}>
                {tags.map((tag) => <option>{tag.label}</option>)}
            </select>
            {uniqueTags.map((tag) => {
                    return <StyledTag >
                        {tag}
                            <button onClick={deleteTag}>
                                <img src={cross} />
                            </button>
                    </StyledTag>
                })
            }
        </div>
    )
};