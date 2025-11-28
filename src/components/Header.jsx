import React, { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';
import Swal from 'sweetalert2';

const Header = () => {

  const [openModal, setOpenModal] = useState(false);

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white'
              : 'text-gray-700'
          }
          to="/"
        >
          🏠 Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white'
              : 'text-gray-700'
          }
          to="/blogs"
        >
          📝 Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white'
              : 'text-gray-700'
          }
          to="/best-places"
        >
          ⭐ Best Places
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white'
              : 'text-gray-700'
          }
          to="/about"
        >
          ℹ️ About
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      {/* HEADER SECTION */}
      <div
        className={`sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 ${openModal ? 'blur-sm pointer-events-none' : ''
          }`}
      >
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md gap-5 dropdown-content bg-white rounded-2xl z-50 mt-4 w-64 p-4 shadow-xl border border-gray-200"
              >
                {navItems}
              </ul>
            </div>

            <NavLink to="/">
              <img src={logo} className="w-full h-14" alt="" />
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 space-x-2">{navItems}</ul>
          </div>

          <div className="navbar-end">
            <button
              onClick={() => setOpenModal(true)}
              className="btn bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white border-none transform hover:scale-105 transition-all duration-300 shadow-lg font-bold rounded-3xl"
            >
              🎯 Book Tour
            </button>
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white rounded-3xl p-8 w-96 shadow-2xl relative">

            {/* Close Button */}
            <button
              className="absolute right-3 top-3 text-xl font-bold"
              onClick={() => setOpenModal(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 bg-clip-text text-transparent">
              📝 Book Your Tour
            </h2>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                       
                setOpenModal(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full rounded-xl"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full rounded-xl"
                required
              />

              <input
                type="date"
                className="input input-bordered w-full rounded-xl"
                required
              />

              <input
                type="number"
                placeholder="Total Persons"
                className="input input-bordered w-full rounded-xl"
                required
              />

              <button
                type="submit"
                onClick={() => Swal.fire("Booking Successful! 🎉")}

                className="btn w-full bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white border-none rounded-3xl font-bold"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
