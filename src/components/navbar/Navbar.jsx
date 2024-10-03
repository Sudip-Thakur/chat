import React, { useContext } from "react";
import { Home, Users } from "lucide-react"; //Bell for Notification
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
// import { AuthContext } from "@/contexts/AuthContext.jsx";

function Navbar() {
  // const {isLoggedIn} = useContext(AuthContext);
  const isLoggedIn = true
  return (
    <nav className="flex justify-between bg-slate-500 items-center px-2 py-2 text-sm font-medium lg:px-4 ">
      <Link to="/home" className="flex items-center">
        <Home className="h-8 w-8" />
        <span className="ml-2">Home</span>
      </Link>
      {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Users className="h-8 w-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <Link to="/profile" className="dropdown-item">
              <DropdownMenuItem> My Profile </DropdownMenuItem>
              </Link>
              <Link to="/home" className="dropdown-item">
              <DropdownMenuItem> LogOut </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
      ) : (
        <Link to="/auth">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
