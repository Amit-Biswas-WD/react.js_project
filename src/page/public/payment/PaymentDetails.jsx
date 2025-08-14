import "../../../index.css";
import CardDetails from "./cardDetails/CardDetails";

const PaymentDetails = () => {
  return (
    <section className="max-w-7xl mx-auto px-7 py-12 rounded-lg bg-[#F1F9F6] grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 mb-20">
      <div className="col-span-2">
        <h2 className="text-[#505050] text-lg poppins-semibold flex items-center gap-2">
          <span>
            <img src="/img/payment/icon.png" alt="" />
          </span>
          Shopping Continue
        </h2>
        <hr className="text-[#D0CFCF] my-5" />
        <h2 className="text-[#505050] text-lg poppins-medium">Shopping cart</h2>
        <p className="text-[#505050] poppins-regular mb-2">
          You have 3 item in your cart
        </p>
        <div className="flex items-center justify-between my-6 bg-white shadow rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img
              className="w-[80px] h-[82px] bg-cover object-cover rounded-md"
              src="/img/formazione/card/2.jpg"
              alt=""
            />
            <div className="">
              <h2 className="text-[#505050] text-2xl poppins-semibold">
                Course Description
              </h2>
              <p className="text-[#3B3B3B] text-base poppins-regular ">
                Afrobeat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#393939] poppins-medium">
            <p className="">$30.00</p>
            <button className="">
              <img src="/img/payment/delete.png" alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-6 bg-white shadow rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img
              className="w-[80px] h-[82px] bg-cover object-cover rounded-md"
              src="/img/formazione/card/2.jpg"
              alt=""
            />
            <div className="">
              <h2 className="text-[#505050] text-2xl poppins-semibold">
                Course Description
              </h2>
              <p className="text-[#3B3B3B] text-base poppins-regular ">
                Afrobeat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#393939] poppins-medium">
            <p className="">$30.00</p>
            <button className="">
              <img src="/img/payment/delete.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <CardDetails/>
      </div>
    </section>
  );
};

export default PaymentDetails;
