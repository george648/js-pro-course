import React from 'react';
import { Articles } from './../articles/articles';


export const Article = ({data}) => {
    return (
        <>
            {data.map((itemContent) => {
                return <Articles {...itemContent} />   
            })}
        </>

    )
}