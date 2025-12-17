// src/components/navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { School } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";
import Button from "./ui/button.jsx";
// import DarkMode from "/src/Darkmode.jsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
  SheetClose
} from "./ui/sheet.jsx";
import { Input } from "./ui/input.jsx";
import { Label } from "./ui/label.jsx";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = true; // ← Yahan true/false karke test kar sakte ho

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-16 bg-white dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 hidden md:flex justify-between items-center h-full">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <School size={32} className="text-blue-600 dark:text-blue-400" />
          <h1 className="font-extrabold text-2xl tracking-tight">E-Learning</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            /* Logged In → Avatar + Dropdown */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
                  <div className="py-2">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold">My Account</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
                    </div>

                    {/* Links */}
                    <div className="py-1">
                      <a href="/dashboard" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Dashboard
                      </a>
                      <a href="/my-learning" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        My Learning
                      </a>
                      <a href="/profile" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Edit Profile
                      </a>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-1">
                      <button
                        onClick={() => alert("Logged out!")}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Not Logged In → Login + Sign Up */
            <div className="flex items-center gap-4">

              {/* Log In Button – Fixed Size */}
              <Button
                variant="outline"
                asChild
                className="w-28 h-11 rounded-xl font-medium border border-gray-800 dark:border-gray-700 bg-transparent text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600  flex items-center justify-center"
              >
                <a href="/login">Log in</a>
              </Button>

              {/* Sign Up Button – Same Fixed Size */}
              <Button
                asChild
                className="w-28 h-11 rounded-xl font-medium bg-gray-700 text-white border hover:bg-gray-800  shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <a href="/signup">Sign up</a>
              </Button>

              {/* <DarkMode/> */}

            </div>
          )}
        </div>
      </div>
      <div className="flex md:hidden  items-center justify-between px-4 ">
        <h1 className=" font-extrabold text-2xl">
          E-Learning
        </h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

// const MobileNavbar = () => {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="ghost" size="icon" className="rounded-full">
//           <Menu className="h-6 w-6" />
//         </Button>
//       </SheetTrigger>

//       <SheetContent side="left" className="w-[300px] bg-white p-6 flex flex-col">
//         {/* Header */}
//         <SheetHeader className="text-left pb-6 border-b border-gray-200">
//           <SheetTitle className="text-2xl font-bold text-gray-900">
//             E-Learning
//           </SheetTitle>
//         </SheetHeader>

//         {/* Menu Items */}
//         <div className="mt-8 flex-1 space-y-6">
//           <SheetClose asChild>
//             <button className="block w-full text-left text-lg font-medium text-gray-800 hover:text-gray-900">
//               <link to="my-learning">My Learning</link>
//             </button>
//           </SheetClose>

//           <SheetClose asChild>
//             <button className="block w-full text-left text-lg font-medium text-gray-800 hover:text-gray-900">
//               Edit Profile
//             </button>
//           </SheetClose>

//           <SheetClose asChild>
//             <button className="block w-full text-left text-lg font-medium text-red-600 hover:text-red-700">
//               Log out
//             </button>
//           </SheetClose>
//         </div>

//         {/* Save changes Button – bilkul neeche fixed */}
//         <div className="mt-auto pt-8 border-t border-gray-200">
//           <SheetClose asChild>
//             <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium">
//               Dashboard
//             </Button>
//           </SheetClose>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };
const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white p-6 flex flex-col">
        <SheetHeader className="text-left pb-6 border-b border-gray-200">
          <SheetTitle className="text-2xl font-bold text-gray-900">
            E-Learning
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex-1 space-y-8">
          {/* My Learning */}
          <SheetClose asChild>
            <Link
              to="/my-learning"
              className="block w-full text-left text-lg font-medium text-gray-800 hover:text-gray-900 transition"
            >
              My Learning
            </Link>
          </SheetClose>

          {/* Edit Profile */}
          <SheetClose asChild>
            <Link
              to="/profile"
              className="block w-full text-left text-lg font-medium text-gray-800 hover:text-gray-900 transition"
            >
              Edit Profile
            </Link>
          </SheetClose>

          {/* Logout */}
          <SheetClose asChild>
            <button
              onClick={() => {
                alert("Logged out!");
                // yahan real logout logic daal dena baad mein
              }}
              className="block w-full text-left text-lg font-medium text-red-600 hover:text-red-700 transition"
            >
              Log out
            </button>
          </SheetClose>
        </div>

        {/* Dashboard Button (bottom mein fixed) */}
        <div className="mt-auto pt-8 border-t border-gray-200">
          <SheetClose asChild>
            <Button asChild className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};