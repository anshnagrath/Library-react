import React,{Component} from 'react';
export const Book = ({title,author,pages,freeBookmark})=>{
        console.log(title,author,pages)
        return(
            <section>
            <h2>{title}</h2>
            <p>by:{author}</p>
            <p>Pages:{pages}</p>
            <p>Free Bookmarks today:{freeBookmark?'yes':'no'}</p>
            </section>
        )
    }