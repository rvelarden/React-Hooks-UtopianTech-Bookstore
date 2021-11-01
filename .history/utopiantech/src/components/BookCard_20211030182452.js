import React, {useCallback} from "react";


const BookCard = ({props})=>{
    // const [cart, setCart] = React.useState([]);
    // const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
    // const [disable, setDisable] = React.useState(false)
    // const [text, setText] = React.useState('')
    // const [items, setItems] = React.useState(props)

  
    
    const listItemsToBuy = () => props.map((book) => (
      <div key={book.id} className="card">
        <div className="font-text"><h2>{`${book.name}`}</h2></div>
        <h2>{`Price: $${book.price}`}</h2>
        <img src={book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
        <h2>Likes: {book.likes}</h2>
        <div>
        <button disable={props.disable} text={props.text} onClick={()=> updateLike(book)}> {book.liked ? "Liked!" : "Like"} </button>
        <button type="submit" onClick={() => addToCart(book)}> Add </button>
        </div>
        <div>
            <div/>
          
  
  
    return (
      <div >
          {
             <div>{listItemsToBuy()}</div>  
          /* <br></br>
          <br></br>
        <img style={{ width: "200px", height: "80px", objectFit: "cover" }} className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Utopia-logo-1.png"></img>TECH
        <div>{listItemsToBuy()}</div>
        <h1 className="center-text">CART</h1> 
        <h1 className="center-text">Total: ${cartTotal}</h1>
        <div>
            <br></br>
          <button className="center-button" onClick={() => setCart([])}>Clear</button>
        </div> */}
      </div>
    )
}

export default BookCard 