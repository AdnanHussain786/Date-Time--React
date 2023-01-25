import logo from "./logo.svg";
import "./App.css";
import { ReactDOM } from "react";
import { useState } from "react";
function App() {
  const [getDate, setDate] = useState(new Date().toLocaleDateString());
  const [getTime, setTime] = useState(new Date().toLocaleTimeString());
  return (
    <>
      
      <div id="banerContainer" className="container">
        <h1>
          <u><i>Adnan Hussain 19-NTU-CS-1038 </i></u>
        </h1>
        <div id="banner">
          <span>Your local time</span>
        </div>
        <div id="date">{getDate}</div>
        <div id="time">{getTime}</div>
      
      </div>
    </>
  );
}

export default App;
