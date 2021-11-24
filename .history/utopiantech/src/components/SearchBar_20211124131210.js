import React, { useCallback, useEffect, useState } from "react";


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

  const Search = (props) => {
    return (
      
      
      <div className="search-bar-div" >
        <br></br>
        <br></br>
        <br></br>
        <img style={{ width: "90px", height: "90px", objectFit: "cover" }} className="logo" title="DroneShip" src="https://thumbs.dreamstime.com/t/vector-drone-prohibited-sign-illustration-colorful-flat-design-no-zone-quadcopter-red-background-70448549.jpg"></img>
            {/* <br></br>
            <div className="banner2">
              <h2>Drones are already delivering critical drugs,
                 Whole sale orders, and pizza.
                 In the next 20 years,
                they'll change entire cities. Learn how shifting regulations and advances in technology will enable change.</h2>
            </div> */}
      
        <div className="bannersingle" >
              <h2>Good Afternoon, Romina!</h2>
          </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
        <div className="bannersingle" >
              <h1>Find Drone Category</h1>
          </div>
        <div className="searchBox" >
          <input
           type="text"
           placeholder={"Search Category by Industrial, Small Business or Personal"}
           className="searchInput"
           onChange={(e) => props.searchBar(e.target.value)}
          />
        </div>
        
      </div>
    );
  };
  
  export default Search;