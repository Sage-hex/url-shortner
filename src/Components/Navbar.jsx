// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-white lg:pb-12">
//       <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <header className="relative flex items-center justify-between py-4 md:py-8">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2.5 md:gap-10 text-2xl font-bold text-black md:text-2xl"
//             aria-label="logo"
//           >
//             <img src="/logo.png" alt="Flowrift Logo" className="h-auto w-10" />
//             <h1 className="hidden md:block font-bold text-black md:text-2xl">
//              Community Day 2025
//             </h1>
//           </Link>

//           {/* Main Navigation */}
//           <nav
//             className={`${
//               isOpen ? "flex" : "hidden"
//             } flex-col gap-4 py-8 md:gap-8 md:py-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-12 absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-orange-500  shadow-md lg:shadow-none p-4 lg:px-8 lg:py-3 md:rounded-full z-10`}
//           >
//             <Link
//               to="/"
//               className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
//             >
//               Home
//             </Link>
//             <Link
//               to="/pricing"
//               className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
//             >
//               Pricing
//             </Link>
//             <Link
//               to="/about"
//               className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
//             >
//               About
//             </Link>

//             {/* Mobile Login/Signup buttons */}
//             <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:hidden mt-4">
//               <Link
//                 to="/signin"
//                 className="inline-block rounded-full px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-white hover:bg-orange-500 focus-visible:ring active:text-indigo-600 md:text-base"
//               >
//                 Sign in
//               </Link>
//               <Link
//                 to="/signup"
//                 className="inline-block rounded-full bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </nav>

//           {/* Desktop Login/Signup buttons */}
//           <div className="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
//             <Link
//               to="/signin"
//               className="inline-block rounded-full px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-white hover:bg-orange-500 focus-visible:ring active:text-indigo-600 md:text-base"
//             >
//               Sign in
//             </Link>
//             <Link
//               to="/signup"
//               className="inline-block rounded-full bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
//             >
//               Sign up
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             type="button"
//             className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Menu
//           </button>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react"; 
import { Link } from "react-router-dom"; 

const Navbar = () => {

  return (
    <div className="bg-white lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-start py-4 md:py-8"> {/* Changed justify-between to justify-start */}
          {/* Logo and Text */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 md:gap-8 text-2xl font-bold text-black md:text-2xl" // Adjusted gap for cleaner look
            aria-label="logo"
          >
            <img src="/logo.png" alt="aws Logo" className="h-auto w-16" />
            <div> {/* Wrapper for the text elements */}
              <h1 className="font-bold text-black md:text-2xl">
                Community Day
              </h1>
              <p className="text-base text-gray-600">Nigeria 2025</p> {/* Added Nigeria text */}
            </div>
          </Link>

         
        </header>
      </div>
    </div>
  );
};

export default Navbar;