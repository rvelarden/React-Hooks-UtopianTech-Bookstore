import React, { useCallback, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
  const [items, setItems] = React.useState([])
  const [text, setText] = React.useState(false)
  const [disable, setDisable] = React.useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(data =>{setItems(data)})
     
  }, [])

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  
  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const updateLike = ()=>{
    console.log(items.map(item))
  }

  
  const listItemsToBuy = () => items.map((book) => (
    <div key={book.id} className="card">
      <div className="font-text"><h2>{`${book.name}`}</h2></div>
      <h2>{`Price: $${book.price}`}</h2>
      <img src={book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
      <h2>Likes: {book.likes}</h2>
      <div>
      <button disable={items.disable} text={items.text} onClick={()=> updateLike(book)}> {text ? "Liked!" : "Like"} </button>
      <button type="submit" onClick={() => addToCart(book)}> Add </button>
      </div>
      <div>
        
      </div>
      <h2>{amountOfItems(book.id)} x ${book.price}) {`${book.name}`}</h2>
      <button type="submit" onClick={() => removeFromCart(book)}> Remove </button>
    </div>
  ))



  const listItemsInCart = () => items.map((item) => (
    <div key={item.id}>
      ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
      <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  ));

  return (
    <div >
        <br></br>
        <br></br>
      <img style={{ width: "200px", height: "80px", objectFit: "cover" }} className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Utopia-logo-1.png"></img>TECH
      <div>{listItemsToBuy()}</div>
      <h1 className="center-text">CART</h1> 
      <h1 className="center-text">Total: ${cartTotal}</h1>
      <div>
          <br></br>
        <button className="center-button" onClick={() => setCart([])}>Clear</button>
      </div>
    </div>
  )
}

export default Shop