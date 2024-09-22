import React, { useState, useRef } from "react";
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import Cookies from "universal-cookie";

const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("usname"))

  if (!isAuth) {
  return (
  <div>
    <Auth setIsAuth={setIsAuth}/>
  </div>
  )
  }

  return (
      <Chat room={"chats"}/>
  )
}

export default App;
