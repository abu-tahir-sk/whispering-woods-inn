import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import logo from "../assets/image/logo.png";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const leftLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Room", path: "/room" },
  ];

  const rightLinks = [
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="bg-[#8B1E1E] text-white relative">
      <div className="w-[95%] mx-auto flex justify-between items-center h-[64px] px-4 md:px-6">
        {/* 👇 Mobile Logo (visible on small screens only) */}
        <div className="er gap-2 md:hidden">
          <h3 className="text-xl font-bold cormorant-garamond">
            Whispering Woods Inn  
          </h3>
        </div>

        {/* 👇 Left Links (Desktop only) */}
        <ul className="hidden md:flex items-center gap-6">
          {leftLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-[17px] font-medium transition ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-700 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 👇 Center Logo (Desktop only) */}
        <div className="absolute left-1/2 -top-1 -translate-x-1/2  -translate-y-1/2 hidden lg:block">
          <img src={logo} alt="logo" className="rounded-full  border-white " />
        </div>

        {/* 👇 Right Links (Desktop only) */}
        <ul className="hidden md:flex items-center gap-6">
          {rightLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-[17px] font-medium transition ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-700 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white transition">
              {user ? (
                <div>
                  <img src={user?.photoURL} alt="" />
                  <button
                    onClick={logOut}
                    className=" text-[14px] text-white rounded-full p-1"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button className="bg-white text-[#8B1E1E] rounded-full p-2">
                    <User size={18} />
                  </button>
                  <Link to="/login">Login</Link>|{" "}
                  <Link to="/signUp">Signup</Link>
                </div>
              )}
            </div>
          </li>
        </ul>

        {/* 👇 Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 👇 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#8B1E1E] px-4 pb-3 space-y-2">
          {[...leftLinks, ...rightLinks].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "bg-green-600 text-white rounded-md"
                    : "hover:bg-green-700 rounded-md"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div
            onClick={() => setOpen(false)}
            className="block bg-white text-[#8B1E1E] rounded-full px-3 py-2 text-center"
          >
            {user ? (
              <button onClick={logOut}>Log Out</button>
            ) : (
              <div >
                <User size={18} className="inline mr-1" /> <Link to="/login">Login </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
