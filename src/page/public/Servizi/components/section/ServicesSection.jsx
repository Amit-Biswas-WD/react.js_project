import AllService from "./../../../../../components/allService/AllService";

// const Data = [
//   {
//     id: 1,
//     icon: "/img/Servizi/wedo/icn1.png",
//     title: "Structural smart working",
//     description:
//       "With years of experience in the sales and marketing industry, our team has a deep ",
//   },
//   {
//     id: 2,
//     icon: "/img/Servizi/wedo/icn2.png",
//     title: "Parcel delivery service",
//     description:
//       "We pride ourselves on securing great deals and promotions for our customers.",
//   },
//   {
//     id: 3,
//     icon: "/img/Servizi/wedo/icn3.png",
//     title: "MBOreward system",
//     description:
//       "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
//   },
//   {
//     id: 4,
//     icon: "/img/Servizi/wedo/icn4.png",
//     title: "Corporate welfare",
//     description:
//       "We understand that navigating the solar and cable landscape can be overwhelming.",
//   },
// ];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl container mx-auto">
      <div className="text-center mb-6">
        <p className="text_green poppins-medium text-xl mb-1">Our Services</p>
      </div>

      <AllService
        heading={"What We Do"}
        image={"/img/Servizi/wedo/img.png"}
        icon1={"/img/Servizi/wedo/icn1.png"}
        icon2={"/img/Servizi/wedo/icn2.png"}
        icon3={"/img/Servizi/wedo/icn3.png"}
        icon4={"/img/Servizi/wedo/icn4.png"}
        title1={"Structural smart working"}
        title2={"Parcel delivery service"}
        title3={"MBO reward system"}
        title4={"Corporate welfare"}
        p1={
          "With years of experience in the sales and marketing industry, our team has a deep "
        }
        p2={
          "We pride ourselves on securing great deals and promotions for our customers."
        }
        p3={
          "Stay connected with high-quality cable services that deliver reliable and fast internet, television"
        }
        p4={
          "We understand that navigating the solar and cable landscape can be overwhelming."
        }
      />
    </section>
  );
};

export default ServicesSection;
