import React from "react";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
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
        <hr />
        <Profile />
        <hr />
        <LogoutButton />
      </div>
    </>
  );
}

export default App;
