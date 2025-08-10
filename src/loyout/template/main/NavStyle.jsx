import navImage from "../../../assets/UnoSicurezza/Home/nav_icon/Group.png";
import StyleButton from "../../../components/Button/StyleButton";

const NavStyle = () => {
  return (
    <div className="flex justify-between text-black my-8 w-[1440px] container mx-auto">
      <div className="">
        <img className="" src={navImage} alt="" />
        <p className="w-6 h-8 text-[#252525]">UnoSicurezza</p>
      </div>
      <div className="flex gap-[55px] my-6">
        <h2 className="font-normal text-base">Home</h2>
        <h2 className="font-normal text-base">Servizi</h2>
        <h2 className="font-normal text-base ">Formazione</h2>
        <h2 className=" font-normal text-base">Chi siamo</h2>
        <h2 className="font-normal text-base">Collabora con noi</h2>
        <h2 className="w-[47px] h-[24px] font-normal text-base">Contattaci</h2>
      </div>
      <div className="my-auto">
        <StyleButton props={"E-Learning"} />
      </div>
    </div>
  );
};

export default NavStyle;
