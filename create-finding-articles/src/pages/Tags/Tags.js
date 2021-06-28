import {tagsData} from './../../tagsData';
import { Tag } from './Tag/Tag';
import { useState } from 'react';
import './Tags.scss';
import { LargeInputValue } from './largeInputValue/largeInputValue';

export const Tags = () => {
    const LARGE_INPUT_VALUE = 15;
    const [isFullString, setFullString] = useState(false);
    const [newTagData, setTag] = useState(tagsData);
    const [label, setNewStringTag] = useState('');

    const deleteTag = (label) => {
        createElementAboutRemoveTag()
        setTag(newTagData.filter((tag) => tag.label !== label))
    };

    const addNewTagToArray = ( {label} ) => {
        setTag(
            [
                ...newTagData,
                {label}
            ]
        )
    };

    const newTagInput = (event) => {
        if(event.target.length === 0) {
            console.log(123) // don't know how to resolve this problem
        }
        else if(event.target.value.length > LARGE_INPUT_VALUE) {
            setFullString(true)
        } else {
            setFullString(false)
        }
        setNewStringTag(event.target.value);
    };

    const createElementAboutRemoveTag = () => {
        
    };

    const addTagHandler = () => {
        addNewTagToArray({label});
        setNewStringTag('');
    };


    return (
        <div className="tasgsWrapper">
            <div className="inputButtonBlock">
                <input value={label} onChange={newTagInput} type="text" />
                <button onClick={addTagHandler}>Add tag</button>
            </div>

            <div className="contentBox">
                {newTagData.map((tag) => <Tag deleteTag={deleteTag} id={tag.id} key={tag.id} label={tag.label} /> )}
            </div>
            {isFullString ? <LargeInputValue /> : false}
        </div>
    )
}