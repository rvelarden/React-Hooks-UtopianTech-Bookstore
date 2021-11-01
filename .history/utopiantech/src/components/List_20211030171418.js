import React from "react"

const List = (props)=>{
    return(
        <div>
            {props.allItems.map(I)}
        </div>
    )
}

export default List 