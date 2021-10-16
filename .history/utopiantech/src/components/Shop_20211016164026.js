import React, { useState, useEffect } from "react";

const items = [
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
    image: "data:image/jpeg;base64,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",
    "likes": 2027,
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
    likes: 2,
    price: 1
  },
  {
    id: 7,
    name: "Ada Lovelace",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToAwcGt318m2KUns8b-JsZ8pbIjfDPfR22lytVg425-n8Vl00vYj3dMd245psSJ_mclMm6uHpgdvt0PTQX1CnIQ1do_8v0ROHhKl6uOeyOOFWMzWJaL6M4&usqp=CAc",
    likes: 2,
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
    likes: 0,
    price: 1
  }
  
  
];

const Shop = (item) => {
  const [cart, setCart] = React.useState([]);
  const [like, setLike] = React.useState(item.likes)
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

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
  

  const listItemsToBuy = () => items.map((item) => (
    <div key={item.id} className="card">
      <h2>{`${item.name}`}</h2>
      <h2>{`Price: $${item.price}`}</h2>
      <img src={item.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
      <h2>Likes: {item.likes}</h2>
      <button onClick={()=> setLike(console.log(item.likes + 1))}>Like</button>
      <button type="submit" onClick={() => addToCart(item)}>Add</button>
      <h2>{amountOfItems(item.id)} x ${item.price}) {`${item.name}`}</h2>
      <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  ));

//   const listItemsInCart = () => items.map((item) => (
//     <div key={item.id}>
//       ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
//       <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
//     </div>
//   ));

  return (
    <div>
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
  );
};

export default Shop;