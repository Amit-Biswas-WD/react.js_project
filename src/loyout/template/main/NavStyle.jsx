import { Link } from "react-router-dom";
import navImage from "../../../assets/UnoSicurezza/Home/nav_icon/Group.png";
import StyleButton from "../../../components/Button/StyleButton";
import { useState } from "react";

const navLink = [
  { label: "Home", path: "/home" },
  { label: "servizi", path: "/servizi" },
  { label: "Formazione", path: "/formazione" },
  { label: "Chi siamo", path: "/chisiamo" },
  { label: "Collabora con noi", path: "/collabora" },
  { label: "Contattaci", path: "/contattaci" },
];

const NavStyle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="my-8 max-w-7xl mx-auto">
      <div className="hidden lg:block">
        <div className="mx-auto flex justify-between text-black ">
          <div className="">
            <img className="ml-7" src={navImage} alt="" />
            <p className="w-6 h-8 text-[#252525]">UnoSicurezza</p>
          </div>
          <div>
            <ul className="flex gap-[45px] my-8">
              {navLink.map((nav) => (
                <li key={nav.label} className="">
                  <Link to={nav.path} className="font-normal text-base">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-auto">
            <StyleButton props={"E-Learning"} />
          </div>
        </div>
      </div>
      <div className="block lg:hidden px-4 overflow-hidden">
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-red-500 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <ul
          className={`text-end transform transition-all duration-[2000ms] ease-in-out
        ${
          isOpen
            ? "translate-y-0 opacity-100 max-h-96"
            : "-translate-y-full opacity-0 max-h-0"
        }`}
        >
          {navLink.map((nav) => (
            <li key={nav.label}>
              <Link to={nav.path} className="font-normal text-base">
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavStyle;
