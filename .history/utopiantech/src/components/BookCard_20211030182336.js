import React, {useCallback} from "react";


const BookCard = ({props})=>{
    // const [cart, setCart] = React.useState([]);
    // const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
    // const [disable, setDisable] = React.useState(false)
    // const [text, setText] = React.useState('')
    // const [items, setItems] = React.useState(props)
  
    // const addToCart = (props) => setCart((currentCart) => [...currentCart, props]);
    
    // const removeFromCart = (props) => {
    //   setCart((currentCart) => {
    //     const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === props.id);
  
    //     if (indexOfItemToRemove === -1) {
    //       return currentCart;
    //     }
  
    //     return [
    //       ...currentCart.slice(0, indexOfItemToRemove),
    //       ...currentCart.slice(indexOfItemToRemove + 1),
    //     ];
    //   });
    // };
  
    // const amountOfItems = (id) => cart.filter((props) => props.id === id).length;
  
    // const updateLike = useCallback(
    //   (props) => {
    //   setItems(props.map(indItem => {
    
    //   setDisable(prevState => ({...prevState, disable: true}))
    //   setText(likeState => ({...likeState, text: console.log(!likeState)}))
      
  
    //     if (indItem !== props) {
    //       console.log(props.id)
    //       return indItem
    //     } 
    //     else {
    //       return {...props, likes: props.likes + 1}
    //     }
    //   }))
    //   },
    //   [], // Tells React to memoize regardless of arguments.
    // );
  
    
    // const listItemsToBuy = () => props.map((book) => (
    //   <div key={book.id} className="card">
    //     <div className="font-text"><h2>{`${book.name}`}</h2></div>
    //     <h2>{`Price: $${book.price}`}</h2>
    //     <img src={book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
    //     <h2>Likes: {book.likes}</h2>
    //     <div>
    //     <button disable={props.disable} text={props.text} onClick={()=> updateLike(book)}> {book.liked ? "Liked!" : "Like"} </button>
    //     <button type="submit" onClick={() => addToCart(book)}> Add </button>
    //     </div>
    //     <div>
          
    //     </div>
    //     <h2>{amountOfItems(book.id)} x ${book.price}) {`${book.name}`}</h2>
    //     <button type="submit" onClick={() => removeFromCart(book)}> Remove </button>
    //   </div>
    // ))
  
  
  
    // const listItemsInCart = () => props.map((item) => (
    //   <div key={props.id}>
    //     {/* ({amountOfItems(props.id)} x ${props.price}) {`${props.name}`}
    //     <button type="submit" onClick={() => removeFromCart(props)}>Remove</button> */}
    //   </div>
    // ));
  
    return (
      <div >
          {
              
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