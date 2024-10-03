import ChatList from "./ChatList.jsx";
import React from 'react'
import { Outlet } from "react-router-dom";
function Chat() {
  return(
    <div className="h-screen flex bg-grey-100">
      <ChatList />
      <Outlet/>
    </div>
  ) 
}
export default Chat