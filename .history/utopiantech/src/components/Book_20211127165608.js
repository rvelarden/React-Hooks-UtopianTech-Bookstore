import React, { Component, useCallback } from 'react';


const allItems = [
    {
      id: 1,
      name: "The Rise and Decline of Patriarchal Systems",
      image: "https://img.thriftbooks.com/api/images/i/m/8ECA8C9BAF351D13622ADFFBFA8A5D4E2BAABAFF.jpg",
      likes: 3359,
      price: 1,
      category: 'Social Studies'
    },
    {
      id: 2,
      name: "Architect or Bee?: The Human/Technology Relationship",
      image: "https://i.pinimg.com/originals/73/73/d8/7373d864a3dcb4534dc00fda64483674.jpg",
      likes: 2027,
      price: 1,
      category: 'Social Studies'
    },
    {
      id: 3,
      name: "Utopia for Realists: How We Can Build the Ideal World",
      image: "https://images-na.ssl-images-amazon.com/images/I/51CJA6QHtKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      likes: 813,
      price: 1,
      category: 'Computer Science'
    },
    {
      id: 4,
      name: "Ada's Algorithm: How Lord Byron's Daughter ADA Lovelace Launched the Digital Age",
      image: 'https://img.thriftbooks.com/api/images/m/0bb4a32fefff1ec9c627527f6feb36668f62783b.jpg',
      likes: 7777,
      price: 1,
      category: 'Computer Science'
    },
    {
      id: 5,
      name: "Turing's Vision: The Birth of Computer Science (The MIT Press)",
      image: "https://images-na.ssl-images-amazon.com/images/I/411cTz90bFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      likes: 1000,
      price: 1,
      category: 'Computer Science'
    },
    {
      id: 6,
      name: "Alan Turing: The Enigma: The Centenary Edition",
      image: "https://img.thriftbooks.com/api/images/m/6da6b05beb1f54981b588ee2a84e6f0b13a436f9.jpg",
      likes: 2000,
      price: 1,
      category: 'Computer Science'
    },
    {
      id: 8,
      name: "Ada Lovelace: The Making of a Computer Scientist",
      image: "https://images-na.ssl-images-amazon.com/images/I/51G-h1wZ7xL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      likes: 2000,
      price: 1,
      category: 'Computer Science'
    },
    {
      id: 9, 
      name: "If Then: How the Simulmatics Corporation Invented the Future",
      image: "https://images-na.ssl-images-amazon.com/images/I/41wf6nnKIBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      likes: 8000,
      price: 1,
      category: 'Business'
    }
  ]

   
const Book = (props) => {
    const [cart, setCart] = React.useState([]);
    const [items, setItems] = React.useState(allItems)
    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
    
    const addToCart = (item) => setCart((currentCart) => [...currentCart, item])

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

    const updateLike = 
    
        (props) => {
            setItems((currentCart) => {
            currentCart.filter((ind) => console.log() //=>indItem !== props ? indItem : {...props, likes: props.likes + 1}
            )
                
                
                // if (indItem !== item) {
                //     return indItem
                //   } else {
                //     return {...item, likes: item.likes + 1}
                //   }
          

              });
            }

    //   const listItemsToBuy = () => items.map((book) => (
    //     <div key={book.id} className="card">
    //       <div className="font-text"><h2>{`${book.name}`}</h2></div>
    //       <h2>{`Price: $${book.price}`}</h2>
    //       <img src={book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
    //       <h2>Likes: {book.likes}</h2>
    //       <div>
    //       <button disable={items.disable}  onClick={()=> updateLike(book)}> {"Like"} </button>
    //       <button type="submit" onClick={() => addToCart(book)}> Add </button>
    //       </div>
    //     </div>
    //   ))
   

      return(
            <div className="center-text font-text-text">
            <div  key={props.book.id} className="card">
                
            <div className="font-text"><h2>{`${props.book.name}`}</h2>
            </div>
            <h2>{`Price: $${props.book.price}`}</h2>
            <img src={props.book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
            <h2>Likes: {props.book.likes}</h2>
            <div>
            <button  onClick={updateLike}> {"Like"} </button>
            <button type="submit" onClick={() => addToCart(props.book)}> Add </button>
            </div>
            <h2>Qty: {amountOfItems(props.book.id)}</h2>
            <button type="submit" onClick={() => removeFromCart(props.book)}> Remove </button>
            </div>
            <h1 className="center-text font-text-text">CART</h1> 
            <h1 className="center-text font-text-text">Total: ${cartTotal}</h1>
            <div>
            <br></br>
            <button  onClick={() => setCart([])}>Clear</button>

            </div>
            </div>
      )
    }

  export default Book
