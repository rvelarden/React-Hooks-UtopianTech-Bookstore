import React from "react"
import Book from 

const List = (props)=>{
    return(
        <div>
            {props.allItems.map(Item =>{<BookCard/>})}
        </div>
    )
}

export default List 