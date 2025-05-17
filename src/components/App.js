import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [btnClass, setBtnClass] = useState('hide');

  return (
    <div className="App" id="main">
      <button onClick={()=>setBtnClass('show')} id="click">Show</button>
      {/* <button onClick={()=>setBtnClass('hide')} id="click">Hide</button> */}
      <p className={btnClass} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
