import React from "react"
import Boo

const List = (props)=>{
    return(
        <div>
            {props.allItems.map(Item =>{<BookCard/>})}
        </div>
    )
}

export default List 