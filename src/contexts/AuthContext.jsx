import axios from "axios";
import { BASE_URL } from "@/constants.js";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    //refresh Token
    try {
      await axiosInstance.post("/auth/refresh-access", {});
    } catch (err) {
      if (err.response) {
        toast(err.response.data.message);
      }
    }

    //get-current user
    try {
      const res = await axiosInstance.get("/auth/current-user");
      if (res.data.success) {
        console.log("hello")
        setIsLoggedIn(true);
        setUser(res.data.data);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      if (err.response) {
        toast(err.response.data.message);
      }
      setIsLoggedIn(false);
      setUser(null);
    }
  };
  console.log("Context: ", isLoggedIn)
  useEffect(()=>{
    checkAuth()
  },[])

  return(
    <AuthContext.Provider value={{user,checkAuth, setIsLoggedIn, isLoggedIn, setUser}}>
      {children}
    </AuthContext.Provider>
  )
};

