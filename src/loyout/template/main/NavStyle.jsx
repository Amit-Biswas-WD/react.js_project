import { Link } from "react-router-dom";
import navImage from "../../../assets/UnoSicurezza/Home/nav_icon/Group.png";
import StyleButton from "../../../components/Button/StyleButton";

const navLink = [
  { label: "Home", path: "/home" },
  { label: "servizi", path: "/servizi" },
  { label: "Formazione", path: "/sormazione" },
  { label: "Chi siamo", path: "/chisiamo" },
  { label: "Collabora con noi", path: "/collabora" },
  { label: "Contattaci", path: "/contattaci" },
];

const NavStyle = () => {
  return (
    <header className="my-8 max-w-7xl mx-auto">
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
    </header>
  );
};

export default NavStyle;
