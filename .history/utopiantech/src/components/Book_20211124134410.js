import React, { Component } from 'react';
import { Card, Icon, Image, Header,Button } from 'semantic-ui-react'


  class Booking extends Component {



    render(){
      return (
        <div className='box-wrap' >
        <Card fluid>
        <Image  wrapped ui={false} />
        <Card.Content>
          <Card.Header>
          <img class="image" style={{ width: "250px", height: "150px", objectFit: "cover" }} src={this.props.booking.drone.image} />
            <h2>{this.props.booking.drone.model}</h2>
            <h2>{this.props.booking.drone.category}</h2>
          </Card.Header>
           <Header as='h1' color='black' textAlign='center' font='helvetica'>
          </Header>
          
        </Card.Content>
        <Card.Content extra>
          
            <h2>From: {this.props.booking.from_address}</h2>
            <h2>To: {this.props.booking.to_address}</h2>
         
        </Card.Content>
        <Card.Content extra>
        <Button  fluid size='small' secondary onClick={this.displayForm} >
            Edit Delivery
          </Button>
          {this.state.showForm ?  <EditBooking booking={this.props.booking} updatedBookings={this.props.updatedBookings} editBookingForm={this.props.editBookingForm} bookings={this.props.bookings} /> : null}
          <br></br>
          
          <Button basic fluid size='small'  color='red' onClick={()=>this.props.deleteBooking(this.props.booking)}className="del-btn" >
          Cancel Booking
          </Button>
    </Card.Content>
      </Card>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
    );
  }

}

export default Booking;