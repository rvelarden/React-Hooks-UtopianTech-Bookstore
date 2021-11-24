import React, { Component } from "react"
import Book from "./Book.js"
import { Header, Button } from 'semantic-ui-react'

class BookList extends Component {
   
  
    render() {
    return (
        <div>
    
            </div>
            {this.props.books.map(bookItem => <Book book={bookItem} />)}
          
        </div>
    )
      }
}

export default BookList