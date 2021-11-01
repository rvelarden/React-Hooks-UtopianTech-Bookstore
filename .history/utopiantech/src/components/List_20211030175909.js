import React from "react"
import BookCard from './BookCard'

const List = (props)=>{
    return(
        <div>
            {/* {props.items.map(Item =>{<BookCard items={Item} key={Item.id}/>})} */
             console.log(props.items)}
        </div>
    )
}

export default List 