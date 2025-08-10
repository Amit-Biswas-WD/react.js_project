import img1 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/Group.png";
import img2 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/Vector (1).png";
import img3 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/Vector (2).png";

import img4 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_acn 1.png";
import img5 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_capterra 1.png";
import img6 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_ias-register 1.png";
import img7 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_IMQ 1.png";
import img8 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_lombardia 1.png";
import img9 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_scorm 1.png";
import img10 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_user-experience-badge-2018-feb-small 1.png";
import img11 from "../../assets/UnoSicurezza/Home/UnoSicurezza_brand/imgi_1_value-for-money-badge-2019-feb 1.png";

const icons = [
  { id: 1, image: img4 },
  { id: 2, image: img5 },
  { id: 3, image: img6 },
  { id: 4, image: img7 },
  { id: 5, image: img8 },
  { id: 6, image: img9 },
  { id: 7, image: img10 },
  { id: 8, image: img11 },
];

const UnoSicurezza = () => {
  return (
    <div className="bg-[#F0FAF7] py-12 flex justify-between my-16">
      <img src={img2} alt="" />
      <div className="">
        <div className="flex justify-center">
          <div>
            <img className="w-[52px] h-[66px] ml-6" src={img1} alt="" />
            <p className="text_green font-semibold">UnoSicurezza</p>
          </div>
        </div>
        <div className="flex justify-center text-center my-8">
          <p className="Poppins text-[#505050] font-medium text-xl w-[750px]">
            "La nostra piattaforma è in possesso di certificazioni italiane
            riconosciute, che garantiscono eccellenza, conformità e
            affidabilità. (Certificazioni valide a livello nazionale in
            Italia.)"
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-4 grid-rows-2 gap-10 max-w-[523px] max-h-[147px]">
          {icons.map((icon) => (
            <img
              className="row-span-2 w-[59px] h-[57px]"
              key={icon.id}
              src={icon.image}
              alt=""
            />
          ))}
        </div>
      </div>
      <img src={img3} alt="" />
    </div>
  );
};

export default UnoSicurezza; 
