import React from "react";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profilev2 from "./components/Profilev2";
import CubeQuery from "./components/CubeQuery";
// import { useState } from "react";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LoginButton />
        <LogoutButton />
        <hr />
        <Profilev2 />
        <hr />
        <hr />
        <hr />
        <CubeQuery />
        <hr />
      </div>
    </>
  );
}

export default App;
