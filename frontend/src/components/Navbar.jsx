import React from "react";
import { Button } from "./ui/button";
import { Bell, ShoppingBagIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-500 hover:text-blue-400";

  const user = true;
  return (
    <div className="border-b h-15 flex items-center justify-between px-10">
      <div className="">LOGO</div>
      <div className="flex items-center gap-20">
        <div className="flex space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
        {user ? (
          <div className="flex items-center space-x-6">
            <Bell className="h-6 w-6" />
            <ShoppingBagIcon className="h-6 w-6" />

            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
