import React, { useCallback } from "react";



const Book = () =>{ items.map((book) => (
    <div key={book.id} className="card">
      <div className="font-text"><h2>{`${book.name}`}</h2></div>
      <h2>{`Price: $${book.price}`}</h2>
      <img src={book.image} style={{ width: "200px", height: "300px", objectFit: "cover" }} className="book-avatar" />
      <h2>Likes: {book.likes}</h2>
      <div>
      <button disable={items.disable} text={items.text} onClick={()=> updateLike(book)}> {book.liked ? "Liked!" : "Like"} </button>
      <button type="submit" onClick={() => addToCart(book)}> Add </button>
      </div>
      <div>
        
      </div>
      <h2>{amountOfItems(book.id)} x ${book.price}) {`${book.name}`}</h2>
      <button type="submit" onClick={() => removeFromCart(book)}> Remove </button>
    </div>
  ))
}