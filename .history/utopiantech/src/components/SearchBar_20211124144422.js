import React, { useCallback, useEffect, useState } from "react";




  const Search = (props) => {
   

    return (
      <div className="center-text font-text-text">
       
        <div className="bannersingle" >
              <h1>Find Book Name</h1>
          </div>
        <div >
          <input
          className="center-text font-text-text"
           type="text"
           placeholder={"Search"}
           className="searchInput"
           onChange={(e) => props.searchBar(e.target.value)}
          />
        </div>
        
      </div>
    );
  };
  
  export default Search;