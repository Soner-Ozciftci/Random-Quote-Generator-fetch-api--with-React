
import { useState } from "react";
import ' ./App.css';

function App() {

const [quotes , setQuotes]=useState("");
const getQuote= ()={
  fetch("https://type.fit/api/quotes")
}


  return (
    <div className="App">

    </div>
  );
}

export default App;
