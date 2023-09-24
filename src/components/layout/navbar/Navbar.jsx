import { CarWidget } from "../../common/cartWidget/CarWidget";
import logo from "../../../assets/img/logo.svg";

export const NavBar = () => {
  return (
    <div className="bg-black text-white flex justify-around text-2xl bg-opacity-50 p-5">
      <img className="w-32 " src={logo} alt="logo" />
      <ul className=" flex gap-12 justify-center text-center items-center">
        <li>
          <a href="../../pages/home">Home</a>
        </li>
        <li>
          <a href="../../pages/about">About</a>
        </li>
        <li>
          <a href="../../pages/services">Services</a>s
        </li>
        <li>
          <a href="../../pages/contact">Contact</a>
        </li>
      </ul>
      <CarWidget />
    </div>
  );
};
