import React, { Component } from "react"
import Book from "./Book.js"
import { Header, Button } from 'semantic-ui-react'

class BookList extends Component {
   
  
    render() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div  class="ui secondary segment">
            <Header as='h1'  textAlign='center'>
            <h1 >My Upcoming Bookings</h1>
            </Header>
            </div>
            {this.props.books.map(bookItem => <Book booking={bookItem} books={this.props.books}/>)}
          
        </div>
    )
      }
}

export default BookList