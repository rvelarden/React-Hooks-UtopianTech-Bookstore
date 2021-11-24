import React, { Component } from "react"
import Book from "./Book.js"
import { Header, Button } from 'semantic-ui-react'

class BookList extends Component {
   
  
      render() {
    return (
        <div>
            {/* {console.log(this.props.bookings)} */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div  class="ui secondary segment">
            <Header as='h1'  textAlign='center'>
            <h1 >My Upcoming Bookings</h1>
            </Header>
            </div>
            {this.props.bookings.map(bookItem => <Book booking={bookItem} editBookingForm={this.props.editBookingForm} drones={this.props.drones}  books={this.props.books}/>)}
          
        </div>
    )
      }
}

export default BookList