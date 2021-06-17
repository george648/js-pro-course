import React from 'react';
import { Author } from './../author/author';
import { Description } from './../description/description';
import { Date } from './../date/date';
import { Title } from './../title/title';

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