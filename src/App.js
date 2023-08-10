
import { useState } from "react";
import './App.css';

function App() {

const [quotes , setQuotes]=useState("");
const getQuote= ()=>{
  fetch("https://type.fit/api/quotes")
  .then((res)=>res.json())
  .then((data)=>{
  let randomNum = Math.floor(Math.random()* data.lenght)
setQuotes(data[randomNum])
});
}


  return (
    <div className="App">
      {quotes.text}
<button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
