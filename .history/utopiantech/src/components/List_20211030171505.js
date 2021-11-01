import React from "react"
import

const List = (props)=>{
    return(
        <div>
            {props.allItems.map(Item =>{<BookCard/>})}
        </div>
    )
}

export default List 