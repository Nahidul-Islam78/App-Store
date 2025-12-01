import React from 'react';
import logo from '../../assets/assets/logo.png';
import githubLogo from '../../assets/assets/github-logo.png'
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="px-5 md:px-10 border-b-2 border-[#e9e9e9]">
      <div className="navbar bg-base-100 ">
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
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to="">
                <li>
                  <p className="font-medium inter-font">Home</p>
                </li>
              </Link>
              <Link to="Apps">
                <li>
                  <p className="font-medium inter-font">Apps</p>
                </li>
              </Link>
              <Link to="Installation">
                <li>
                  <p className="font-medium inter-font">Installation</p>
                </li>
              </Link>
            </ul>
          </div>

          <Link to="/">
            <p className="btn btn-ghost text-xl">
              <img className="h-10 w-10" src={logo} alt="app logo" />
              <span className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-transparent bg-clip-text inter-font font-bold">
                HERO.IO
              </span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="">
              <li>
                <p className="font-medium inter-font">Home</p>
              </li>
            </Link>
            <Link to="Apps">
              <li>
                <p className="font-medium inter-font">Apps</p>
              </li>
            </Link>
            <Link to="Installation">
              <li>
                <p className="font-medium inter-font">Installation</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Nahidul-Islam78"
            className="btn bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-[#ffffff] font-semibold inter-font "
          >
            <img src={githubLogo} alt=" github logo" />
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;