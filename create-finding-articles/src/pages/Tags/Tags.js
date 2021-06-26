import {tagsData} from './../../tagsData';
import { Tag } from './Tag/Tag';
import { useState } from 'react';
import './Tags.scss'

export const Tags = () => {
    const [newTag, setTag] = useState(tagsData);

    const eventTarget = (event) => event.target.value;

    return (
        <div className="tasgsWrapper">
            <div className="inputButtonBlock">
                <input eventTarget={eventTarget} type="text" />
                <button>Add tag</button>
            </div>
            <div className="contentBox">
                {tagsData.map((tag) => <Tag eventTarget={eventTarget} key={tag.id} label={tag.label} /> )}
            </div>
        </div>
    )
}