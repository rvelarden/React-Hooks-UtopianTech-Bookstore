import React, { useState, useEffect, useCallback } from "react";

const allItems = [
  {
    id: 1,
    name: "The Rise and Decline of Patriarchal Systems",
    image: "https://img.thriftbooks.com/api/images/i/m/8ECA8C9BAF351D13622ADFFBFA8A5D4E2BAABAFF.jpg",
    likes: 3359,
    price: 1
  },
  {
    id: 2,
    name: "Architect or Bee?: The Human/Technology Relationship",
    image: "https://i.pinimg.com/originals/73/73/d8/7373d864a3dcb4534dc00fda64483674.jpg",
    likes: 2027,
    price: 1,
  },
  {
    id: 3,
    name: "Utopia for Realists: How We Can Build the Ideal World",
    image: "https://images-na.ssl-images-amazon.com/images/I/51CJA6QHtKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    likes: 813,
    price: 1,
  },
  {
    id: 4,
    name: "Ada's Algorithm: How Lord Byron's Daughter ADA Lovelace Launched the Digital Age",
    image: 'https://img.thriftbooks.com/api/images/m/0bb4a32fefff1ec9c627527f6feb36668f62783b.jpg',
    likes: 7777,
    price: 1
  },
  {
    id: 5,
    name: "Turing's Vision: The Birth of Computer Science (The MIT Press)",
    image: "https://images-na.ssl-images-amazon.com/images/I/411cTz90bFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    likes: 1000,
    price: 1
  },
  {
    id: 6,
    name: "Alan Turing: The Enigma: The Centenary Edition",
    image: "https://img.thriftbooks.com/api/images/m/6da6b05beb1f54981b588ee2a84e6f0b13a436f9.jpg",
    likes: 2000,
    price: 1
  },
  {
    id: 7,
    name: "Ada Lovelace",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToAwcGt318m2KUns8b-JsZ8pbIjfDPfR22lytVg425-n8Vl00vYj3dMd245psSJ_mclMm6uHpgdvt0PTQX1CnIQ1do_8v0ROHhKl6uOeyOOFWMzWJaL6M4&usqp=CAc",
    likes: 900,
    price: 1
  },
  {
    id: 8,
    name: "Ada Lovelace: The Making of a Computer Scientist",
    image: "https://images-na.ssl-images-amazon.com/images/I/51G-h1wZ7xL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    likes: 2000,
    price: 1
  },
  {
    id: 9, 
    name: "If Then: How the Simulmatics Corporation Invented the Future",
    image: "https://images-na.ssl-images-amazon.com/images/I/41wf6nnKIBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    likes: 8000,
    price: 1
  }
]

const Shop = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
  const [items, setItems] = React.useState({allItems, disable: false})
  const [stateLike, setLikes] = React.useState(false)

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

  // const updateLike = useCallback(
  //   (item) => {
  //     // console.log('Click happened');
  //   setItems(items.map(indItem => {
  //   // document.getElementById("myBtn").disabled = true
  
  //   setLikes(likeState => ({
  //     stateLike: !likeState.stateLike  
  //   }))
  //     if (indItem !== item) {
  //       console.log(item.id)
  //       return indItem
  //     } 
  //     else {
  //       return {...item, likes: item.likes + 1}
  //     }
  //   }))
  //   },
  //   [], // Tells React to memoize regardless of arguments.
  // );


  const updateLike = (item) =>  
  setItems(items.map(indItem => {
  
    setLikes(rosterState => ({
      stateLike: !rosterState.stateLike  
    }))
      if (indItem !== item) {
        console.log(item.id)
        return {...indItem}
      } 
      else {
        return {...item, likes: item.likes + 1}
      }
    ))

  
  const listItemsToBuy = () => items.map((book) => (
    <div key={book.id} className="card">
      <div className="font-text"><h2>{`${book.name}`}</h2></div>
      <h2>{`Price: $${book.price}`}</h2>
      <img src={book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
      <h2>Likes: {book.likes}</h2>
      <div>
      <button id="myBtn" disabled={items.disabled} onClick={()=> updateLike(book)}> {stateLike ? "Liked!" : "Like"} </button>
      <button type="submit" onClick={() => addToCart(book)}> Add </button>
      </div>
      <div>
        
      </div>
      <h2>{amountOfItems(book.id)} x ${book.price}) {`${book.name}`}</h2>
      <button type="submit" onClick={() => removeFromCart(book)}> Remove </button>
      {/* <button onClick={memoizedHandleClick()}>Click Me</button> */}
    </div>
  ))



  // const listItemsInCart = () => items.map((item) => (
  //   <div key={item.id}>
  //     ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
  //     <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
  //   </div>
  // ));

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