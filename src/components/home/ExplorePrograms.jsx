import "../../index.css";
import img1 from "../../assets/UnoSicurezza/Home/explore/fea2a0b7dc7728c8456ad4b75c7b348c5112ad79.jpg";
import img2 from "../../assets/UnoSicurezza/Home/explore/e0f0d8d9ab0592e26bd0f1b67e6d3386819c3e94 (1).jpg";
import img3 from "../../assets/UnoSicurezza/Home/explore/0b922a7202cdacb6e1f64689fd1d756a43a1824b.jpg";
import img4 from "../../assets/UnoSicurezza/Home/explore/Icon.png";

import image1 from "../../assets/UnoSicurezza/Home/explore/author/5412a2bcc1a0b62fe5e42bf0f9af1ac1d77a35ab.png";
import image2 from "../../assets/UnoSicurezza/Home/explore/author/37042173fddbe9ba42957f586917c78c17fef829.jpg";
import image3 from "../../assets/UnoSicurezza/Home/explore/author/2cc3ba92c0a402567bf37e095262f204b3eb3c99.jpg";

const Data = [
  {
    id: 1,
    image: img1,
    category: "Soft skills",
    title: "Formazione SEVESO",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    author: {
      image: image1,
      name: "Jane Cooper",
      price: 17.84,
      category: "Instructor",
    },
  },
  {
    id: 2,
    image: img2,
    category: "Safety at work",
    title: "Formazione per i datori...",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.3,
    author: {
      image: image2,
      name: "Jane Cooper",
      price: 12.84,
      category: "Instructor",
    },
  },
  {
    id: 3,
    image: img3,
    category: "CFP courses",
    title: "Formazione GENERALE",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 3.5,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 19.84,
      category: "Instructor",
    },
  },
];

const ExplorePrograms = () => {
  return (
    <div className="">
      <div>
        <h4 className="text_green font-semibold text-base">ExplorePrograms</h4>
        <h2 className="font-semibold text-4xl poppins-semibold text-[#101828] my-5 poppins-medium">
          Esplora il mostro catalgo corst
        </h2>
        <p className="poppins-medium text-xl text-[#667085]">
          Unisciti alla nostra famosa classe, le conoscenze acquisite ti saranno
          sicuramente utili.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 my-8">
        {Data.map((items) => (
          <div
            key={items.id}
            className="col-span-1 p-4 border-2 rounded-lg border-[#FFFFFF] shadow"
          >
            <div className="Poppins">
              <img
                className="w-[336px] h-[240px] bg-cover rounded-sm"
                src={items.image}
                alt=""
              />
              <p className="text_green my-3 font-medium text-base">
                {items.category}
              </p>
              <div className="flex justify-between items-center">
                <h2 className="text-[#101828] Poppins font-semibold text-2xl">
                  {items.title}
                </h2>
                <img className="w-2.5 h-2.5" src={img4} alt="" />
              </div>
              <div className="my-3">
                <p className="text-base font-normal plus-jakarta-sans-regular">
                  {items.paragraph}
                </p>
                <p>{items.rating} </p>
              </div>
            </div>
            <div className="plus-jakarta-sans-regular flex items-center justify-between gap-4 my-3">
              <div className="flex items-center gap-4">
                <img
                  className="w-[30px] rounded-full"
                  src={items.author.image}
                  alt=""
                />
                <div>
                  <h2 className="font-normal text-base">{items.author.name}</h2>
                  <p className="font-normal text-[10px]">
                    {items.author.category}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="Poppins font-semibold text-2xl text_green">
                  €{items.author.price}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-6 Poppins font-semibold text-base">
        <button className="btn border rounded-[8px] border-[#c2c1c5] bg-[#F9FAFB] text-[#252525] font-semibold w-[236px] h-[44px]">Esplora tutti i programmi</button>
      </div>
    </div>
  );
};

export default ExplorePrograms;
