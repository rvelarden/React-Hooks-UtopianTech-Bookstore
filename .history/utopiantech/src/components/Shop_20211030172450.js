import React, { useCallback } from "react";
import List from './List'

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
  const [items, setItems] = React.useState(allItems)
 

  return (
    <div >
      <List allItems={allItems}/>
     
    </div>
  )
}

export default Shop