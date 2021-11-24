import React, { Component } from "react"
import Book from "./Book.js"
import { Header, Button } from 'semantic-ui-react'

class BookList extends Component {
   
  
    render() {
    return (
        <div>
           
            {this.props.books.map(bookItem => <Book book={bookItem} />)}
          
        </div>
        div
        <h1 className="center-text font-text-text">CART</h1> 
        <h1 className="center-text font-text-text">Total: ${cartTotal}</h1>
        <div>
        <br></br>
        <button className="center-button" onClick={() => setCart([])}>Clear</button>
        </div>
    )
      }
}

export default BookList