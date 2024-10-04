import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black bg-white relative">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-full">
          {/* first part */}
          <div className="flex justify-between items-center w-full py-5 md:px-10 px-3">
            <div className="w-52">
              <img
                className="md:w-[55%] w-[45%]"
                src="/logo.png"
                alt="logo"
              />
            </div>

            <div className="hidden md:flex items-center justify-center gap-5">
              <button className="px-3 py-2 border bg-[#1DB2FF] text-white rounded-md">
                Donate
              </button>
              {/* karpa start */}

              <button className="px-3 py-2 border bg-[#1DB2FF] text-white rounded-md">
                Login
              </button>
            </div>
          </div>

          {/* second part */}
          <div className="hidden md:flex bg-[#E7F6FD] text-black/70 py-5 pl-10">
            <div className="hidden md:flex lg:gap-16 md:gap-5 text-center font-semibold">
              <Link to={"/"}>Home</Link>
              <Link to={"/donation-request"}>Donation Request</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/"}>Funding</Link>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden pr-3">
          <button id="btn" onClick={toggleMenu}>
            {isOpen ? (
              <VscChromeClose size={30}/>
            ) : (
              <RiMenuAddFill size={30}/>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full md:hidden mt-4 absolute top-14 z-10 bg-white/90 py-7 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-20px] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center flex-col space-y-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/donation-request"}>Donation Request</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/"}>Funding</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
