import {tagsData} from './../../tagsData';
import { Tag } from './Tag/Tag';
import { useState } from 'react';
import './Tags.scss';
import { LargeInputValue } from './largeInputValue/largeInputValue';
import { AddTagInput } from './AddTagInput/AddTagInput';
import { AddButtonTag } from './addButtonTag/addButtonTag';
import { ShowDeletedTag } from './ShowDeletedTag/ShowDeletedTag';

export const Tags = () => {
    const MAX_INPUT_VALUE = 15;
    const [isFullString, setFullString] = useState(false);
    const [newTagData, setTag] = useState(tagsData);
    const [label, setNewStringTag] = useState('');
    const [deletedTag, setDeletedTag] = useState('');
    const [disabled, setDisabledButton] = useState(false);


    const deleteTagButton = (label) => {
        createElementAboutRemoveTag()
        setTag(newTagData.filter((tag) => tag.label !== label))
        if(label) {
            setDeletedTag(label)
        }
    };

    const addNewTagToArray = ({label}) => {
        setTag(
            [
                ...newTagData,
                {label}
            ]
        )
    };

    const newTagInput = (event) => {
        console.log(123)
        if(!event.target.value.length) {
           return 
        }
        else if(event.target.value.length > MAX_INPUT_VALUE) {
            setFullString(true);
            setDisabledButton(true);
        } else {
            setFullString(false);
            setDisabledButton(false);
        }
        setNewStringTag(event.target.value);
    };

    const createElementAboutRemoveTag = () => {
        const elemDeleting = document.createElement('p');
        elemDeleting.innerHTML = `you have just deleted ${newTagData}`
    };

    const addTagHandler = () => {
        addNewTagToArray({label});
        setNewStringTag('');
    };

    return (
        <div className="tasgsWrapper">
            <div className="inputButtonBlock">
                <AddTagInput value={label} newTagInput={newTagInput} type="text"/>
                <AddButtonTag disabled={disabled} addTagHandler={addTagHandler}/>
            </div>

            <div className="contentBox">
                {newTagData.map((tag) => <Tag deleteTagButton={deleteTagButton} id={tag.id} key={tag.id} label={tag.label} /> )}
            </div>
            {isFullString ? <LargeInputValue /> : false}
            {/* {label? <ShowDeletedTag label={label} /> : false} */}
            {<ShowDeletedTag label={label} />} 
        </div>
    )
}