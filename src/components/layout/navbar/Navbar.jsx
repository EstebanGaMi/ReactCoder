import React from "react";
import {
  RiHome6Line,
  RiRefund2Fill,
  RiGameLine,
  RiMailLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { CarWidget } from "../../common/cartWidget/CarWidget";
import logo from "../../../assets/img/logo.svg";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="bg-[#1E1D28] bg-opacity-80 fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 -left-full">
        <div>
          <ul className="pl-4">
            <li>
              <Link to="/">
                <img
                  className="w-20 m-auto mb-5 invert-[90%] cursor-pointer"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </li>
            <li className="hover:bg-[#282836] bg-opacity-60 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                to="/"
                className="group-hover:bg-purple-500 p-4 flex justify-center rounded-xl text-purple-600 group-hover:text-white transition-colors"
              >
                <RiHome6Line className="text-2xl" />
              </Link>
            </li>

            {/* <li className="hover:bg-[#282836] hover:bg-opacity-60 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                className="group-hover:bg-purple-500 p-4 flex justify-center rounded-xl text-purple-600 group-hover:text-white transition-colors"
                href="#"
              >
                <RiGameLine className="text-2xl" />
              </Link>
            </li> */}
            <li className="hover:bg-[#282836] hover:bg-opacity-60 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                className="group-hover:bg-purple-500 p-4 flex justify-center rounded-xl text-purple-600 group-hover:text-white transition-colors"
                href="#"
              >
                <RiMailLine className="text-2xl" />
              </Link>
            </li>
            <li className="hover:bg-[#282836] hover:bg-opacity-60 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                className="group-hover:bg-purple-500 p-4 flex justify-center rounded-xl text-purple-600 group-hover:text-white transition-colors"
                href="#"
              >
                <AiOutlineBell className="text-2xl" />
              </Link>
            </li>
            <li className="hover:bg-[#282836] hover:bg-opacity-60 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                to="/cart"
                className="group-hover:bg-purple-500 p-4 flex justify-center rounded-xl text-purple-600 group-hover:text-white transition-colors"
                href="#"
              >
                <CarWidget className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="hover:bg-[#282836] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                className="group-hover:bg-purple-500 p-4 flex justify-center rounded-xl text-purple-600 group-hover:text-white transition-colors"
                href="#"
              >
                <RiLogoutBoxLine className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
