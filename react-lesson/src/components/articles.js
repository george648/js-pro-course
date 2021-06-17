import React from 'react';
import { Author } from './author';
import { Description } from './description'
import { Date } from './date';
import { Title } from './title';

export function Articles ({author, description, date, title}) {
    return (
        <div> 
            <Author author={author} />
            <Description description={description}/>
            <Date date={date}/>
            <Title title={title}/>
        </div>
    )   
}