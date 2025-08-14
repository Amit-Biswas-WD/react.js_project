const CardDetails = () => {
  return (
    <section className="bg-[#D4EBE2] p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-[#505050] text-[22px] poppins-semibold">
          Card Details
        </h2>
        <div className="w-[50px] h-[52px]">
          <img
            className="w-full h-full bg-cover object-cover rounded-md"
            src="/img/payment/img.jpg"
            alt=""
          />
        </div>
      </div>
      <p className="text-[#505050] text-base poppins-regular mt-2 my-2">
        Card type
      </p>
      <div className="flex items-center justify-between">
        <img src="/img/payment/icon1.png" alt="" className="" />
        <img src="/img/payment/icon2.png" alt="" className="" />
        <img src="/img/payment/icon3.png" alt="" className="" />
        <p className="pr-2">see all</p>
      </div>
      <div>
        <div className="my-4">
          <p className="text-[#6B6B6B] text-[14px] poppins-medium mb-[3px]">
            Name on card
          </p>
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              type="text"
              placeholder="Name"
              className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
            />
          </div>
        </div>
        <div className="my-4">
          <p className="text-[#6B6B6B] text-[14px] poppins-medium">
            Card Number
          </p>
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <div className="w-full max-w-sm">
            <p className="text-[#6B6B6B] text-[14px] poppins-medium">
              Expiration date
            </p>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
            />
          </div>
          <div className="w-full max-w-sm">
            <p className="text-[#6B6B6B] text-[14px] poppins-medium">CVV</p>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
            />
          </div>
        </div>
        <hr className="my-6 text-[#5F65C3]" />
        <div>
          <div className="flex items-center justify-between poppins-medium">
            <p className="text-[14px] text-[#505050]">Subtotal</p>
            <p className="text-[14px] text-[#505050]">$90.00</p>
          </div>
          <div className="flex items-center justify-between poppins-medium my-2">
            <p className="text-[14px] text-[#505050]">Total (Tax incl.)</p>
            <p className="text-[14px] text-[#505050]">$1240.00</p>
          </div>
        </div>
        <div className="my-6">
          <button className="flex items-center justify-between w-full px-6 py-4 bg-[#73BFA1] text-white rounded-xl">
            <span>$86.00</span>

            <span className="flex items-center gap-2">
              Checkout
              <img src="/img/payment/icon4.png" alt="" className="text-white w-6 h-6" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
