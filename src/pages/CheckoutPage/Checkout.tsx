import { useState } from "react";
import { useNavigate } from "react-router";

const Checkout = () => {
  const navigate = useNavigate();
  const [typePayment, setTypePayment] = useState("card");

  const backHandler = (): void => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <main>
      <div className="px-[5%] xl:px-[10%]">
        <p
          onClick={backHandler}
          className="mt-4 cursor-pointer hover:text-gold-dark"
        >
          Go Back
        </p>
      </div>

      <section className="mt-12 flex flex-col gap-8 px-[15%]">
        <h1 className="text-3xl font-bold uppercase">checkout</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold-dark">
              Billing details
            </h2>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Name</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="Błażej Pakuła"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Email Address</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="test@test.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Phone Number</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold-dark">
              shipping info
            </h2>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Your Address</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="Warszawska 1000"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">ZIP-Code</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="00-000"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">City</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="Warszawa"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Country</label>
              <input
                type="text"
                className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50"
                placeholder="Poland"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold-dark">
              payment details
            </h2>
            <div className="flex h-14 w-72 items-center gap-4 rounded-lg border border-grey-normal px-6 py-4">
              <input
                value="card"
                type="radio"
                id="card"
                onChange={() => setTypePayment("card")}
                checked={typePayment === "card"}
                className="form-radio"
              />
              <label htmlFor="card">e-Money</label>
            </div>
            <div className="flex h-14 w-72 items-center gap-4 rounded-lg border border-grey-normal px-6 py-4 ">
              <input
                value="cash"
                type="radio"
                id="cash"
                onChange={() => setTypePayment("cash")}
                checked={typePayment === "cash"}
                className="form-radio sr-only"
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
