import React from "react"
import BookCard from './BookCard'

const List = (props)=>{
    return(
        <div>
            {props.items.map(Item =>{<BookCard items={Item} key={Item.id} listItemsInCart={listItemsInCart} updateLike={updateLike}/>})}
        </div>
    )
}

export default List 