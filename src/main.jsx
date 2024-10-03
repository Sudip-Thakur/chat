import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "./components/auth/Auth.jsx";
import Profile from "./components/profile/Profile.jsx";
import Home from "./components/home/Home.jsx";
import StartMessage from "./components/chat/StartMessage.jsx";
import Message from "./components/chat/Message.jsx";
import Chat from "./components/chat/Chat.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="auth" element={<Auth />} />
      <Route path="chat" element={<Chat />}>
        <Route path="" element={<StartMessage />} />
        <Route path=":id" element={<Message />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="" element={<Home />} />
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
