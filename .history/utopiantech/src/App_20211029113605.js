import React from 'react';
import './App.css';

import Shop from "./components/Shop";


function App() {
  const [text, setText] = React.useState(false)

 const handleChange = () =>{
    setText(likeState => ({...likeState, text: console.log(!likeState)}))
  }

  return (
    <div>
      <Shop {handleChange={}}/>
    </div>
  );
}

export default App;
