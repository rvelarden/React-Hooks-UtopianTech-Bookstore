import React, { useCallback, useEffect, useState } from "react";




  const Search = (props) => {
    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
    return (
      
      
      <div className="search-bar-div" >
       
        <div className="bannersingle" >
              <h1>Find Book Name</h1>
          </div>
        <div className="searchBox" >
          <input
           type="text"
           placeholder={"Search"}
           className="searchInput"
           onChange={(e) => props.searchBar(e.target.value)}
          />
           <h1 className="center-text font-text-text">CART</h1> 
            <h1 className="center-text font-text-text">Total: ${cartTotal}</h1>
            <div>
            <br></br>
            <button className="center-button" onClick={() => setCart([])}>Clear</button>
            </div>
        </div>
        
      </div>
    );
  };
  
  export default Search;