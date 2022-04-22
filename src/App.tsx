import React from "react";
import "./assets/styles/App.css";
import { GetIP } from "./Components/GetIP";

function App() {
  return (
    <div className='app'>
      <GetIP
        first={0}
        second={0}
        third={0}
        fourth={0}
        mask={""}
        broadcast={""}
        lastIP={""}
        firstIP={""}
      />
    </div>
  );
}

export default App;
