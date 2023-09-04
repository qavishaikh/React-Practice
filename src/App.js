import React, {useState} from 'react'
import './App.css';


function App() {
  let [data, setData] = useState("Hello World");

  const updateData = () => {
    setData("Qavi Shaikh");
    // alert(data);
  }

  console.log("Render......")
  return (
    <div className="App">
     <h1>{data}</h1>
     <h2>{data}</h2>
     <h3>{data}</h3>
     <h4>{data}</h4>
     <h5>{data}</h5>
     <h6>{data}</h6>

     <button onClick={updateData}>Click Me..</button>
    </div>
  );
}

export default App;
