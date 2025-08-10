import icon from "../../../assets/UnoSicurezza/Home/nav_icon/Group.png";
import gitHub from "../../../assets/UnoSicurezza/Home/footer_icon/Icon.png";
import twitter from "../../../assets/UnoSicurezza/Home/footer_icon/Social icon.png";
import faceBook from "../../../assets/UnoSicurezza/Home/footer_icon/Vector (1).png";
import iNo from "../../../assets/UnoSicurezza/Home/footer_icon/Vector (2).png";
import linkedin from "../../../assets/UnoSicurezza/Home/footer_icon/Vector.png";

const FooterStyle = () => {
  return (
    <section className="max-w-[1440px] container mx-auto bg-[#101828] mt-60">
      <div className="grid grid-cols-5 p-14 gap-12">
        <div className="col-span-1 max-w-[320px]">
          <img src={icon} alt="" />
          <p className="font-bold text_green">UnoSicurezza</p>
          <p className="text-base plus-jakarta-sans-regular text-[#EAECF0] my-6">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <div className="">
          <p className="text-[#98A2B3] text-sm plus-jakarta-sans-regular">
            Product
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Overview
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Features
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Solutions
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Tutorials
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Pricing
          </p>
        </div>
        <div className="">
          <p className="text-[#98A2B3] text-sm plus-jakarta-sans-regular">
            Company
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            About Us
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Course
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            News
          </p>
        </div>
        <div className="">
          <p className="text-[#98A2B3] text-sm plus-jakarta-sans-regular">
            Social
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Twitter
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Linkedin
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Facebook
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Instagram
          </p>
        </div>
        <div className="">
          <p className="text-[#98A2B3] text-sm plus-jakarta-sans-regular">
            Legal
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Terms
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Privacy
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular my-2">
            Cookies
          </p>
          <p className="text-[#EAECF0] text-base plus-jakarta-sans-regular">
            Police
          </p>
        </div>
      </div>
      <div className="max-w-[1216px] container mx-auto flex justify-between pb-10">
        <div className="text-[#98A2B3]">© 2022 UnoSicurezza. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={faceBook} alt="" />
          <img src={gitHub} alt="" />
          <img src={iNo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FooterStyle;
