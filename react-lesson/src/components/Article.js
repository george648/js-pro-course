import React from 'react';
import { Articles } from './articles';


export const Article = ({data}) => {
    return (
        <>
            {data.map((itemContent) => {
                return <Articles {...itemContent} />   
            })}
        </>

    )
}