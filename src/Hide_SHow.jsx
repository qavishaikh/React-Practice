import React, {useState} from 'react';
import './Hide.css';

const Hide_SHow = () => {
    const [status, setStatus] = useState(true);
  return (
    <div className='App'>
      <h1>Hde Show & Togggle</h1>
    {
        status ? <div className='style'>Hello Qavi </div> : null
    }
    <button onClick={() => setStatus(false)}>Hide</button>
    <button onClick={() => setStatus(true)}>Show</button>
    <br />
    <button onClick={() => setStatus(!status)}>Toggle</button>

    </div>
  )
}

export default Hide_SHow
