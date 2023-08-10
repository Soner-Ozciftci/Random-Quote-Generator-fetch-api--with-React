
import { useState } from "react";
import ' ./App.css';

function App() {

const [quotes , setQuotes]=useState("");
const getQuote= ()={
  fetch("https://type.fit/api/quotes")
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}


  return (
    <div className="App">

    </div>
  );
}

export default App;
