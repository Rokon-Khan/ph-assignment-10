import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo3.png";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className=" lg:px-10 lg:py-5 bg-base-200">
      <div className="navbar z-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/allcampaign"
              >
                All Campaign
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/mycampaign"
              >
                My Campaign
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/mydonation"
              >
                My Donation
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/addnewcampaign"
                // to={`/addcampaign/${user?.id}`}
              >
                Add New Campaign
              </NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-green-600 text-3xl font-bold lg:flex hidden"
          >
            Fund_Raiser
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 text-xl px-1 gap-6">
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/allcampaign"
            >
              All Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/mycampaign"
            >
              My Campaign
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/mydonation"
            >
              My Donation
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/addnewcampaign"
              // to={`/addcampaign/${user?.id}`}
            >
              Add New Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/about-us"
              // to={`/addcampaign/${user?.id}`}
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/contact-us"
              // to={`/addcampaign/${user?.id}`}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button
            className="btn btn-ghost btn-circle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              </svg>
            )}
          </button>
          {/* <div>
            <Link
              to="/login"
              className="btn bg-green-400 text-xl text-white font-bold "
            >
              Login
            </Link>
          </div> */}
          {user ? (
            <div className="group relative z-10">
              <img
                className="w-[60px] h-[60px] border-4 border-zinc-300 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt=""
              />

              {/* <button
                onClick={handleLogOut}
                className="btn bg-green-400 text-xl text-white font-bold "
              >
                Log Out
              </button> */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-[200px]">
                <h3 className="text-xl font-bold text-center text-gray-700">
                  {user?.displayName}
                </h3>
                <button
                  onClick={handleLogOut}
                  className="btn bg-green-400 text-lg text-white font-bold"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-400 text-xl text-white font-bold ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
