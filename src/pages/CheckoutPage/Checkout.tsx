import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/hooks";
import { CartData } from "../../components/Cart";
import InputCheckout from "../../components/InputCheckout";
import confirmIcon from "../../../public/assets/checkout/icon-order-confirmation.svg";
import ButtonGold from "../../ui/ButtonGold";

const Checkout = () => {
  const navigate = useNavigate();
  const [typePayment, setTypePayment] = useState("cash");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState(false);
  const [eMoney, setEMoney] = useState("");
  const [eMoneyError, setEMoneyError] = useState(false);
  const [eCode, setECode] = useState("");
  const [eCodeError, setECodeError] = useState(false);

  const [submit, setSubmit] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(true);

  useEffect(() => {
    if (!name && submit) setNameError(true);
    else setNameError(false);
    if (!mail && submit) setMailError(true);
    else setMailError(false);
    if (!phoneNumber && submit) setPhoneNumberError(true);
    else setPhoneNumberError(false);
    if (!address && submit) setAddressError(true);
    else setAddressError(false);
    if (!code && submit) setCodeError(true);
    else setCodeError(false);
    if (!city && submit) setCityError(true);
    else setCityError(false);
    if (!country && submit) setCountryError(true);
    else setCountryError(false);
    if (!eMoney && submit) setEMoneyError(true);
    else setEMoneyError(false);
    if (!eCode && submit) setECodeError(true);
    else setECodeError(false);
  }, [name, mail, phoneNumber, address, code, city, country, eMoney, eCode]);

  const formSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit");

    if (
      name &&
      mail &&
      phoneNumber.length === 9 &&
      address &&
      code.length >= 5 &&
      city &&
      country &&
      typePayment === "cash"
    ) {
      setSubmit(true);
      setSubmitSuccess(true);
      setName("");
      setMail("");
      setPhoneNumber("");
      setAddress("");
      setCode("");
      setCity("");
      setCountry("");
      setEMoney("");
      setECode("");
    } else if (
      name &&
      mail &&
      phoneNumber.length === 9 &&
      address &&
      code.length >= 5 &&
      city &&
      country &&
      typePayment === "card" &&
      eMoney.length === 9 &&
      eCode.length === 4
    ) {
      setSubmit(true);
      setSubmitSuccess(true);
      setName("");
      setMail("");
      setPhoneNumber("");
      setAddress("");
      setCode("");
      setCity("");
      setCountry("");
      setEMoney("");
      setECode("");
    } else {
      setSubmit(true);
      setSubmitSuccess(false);
    }
  };

  const cartData = useAppSelector((state) => state.storeSlice.data);

  const backHandler = (): void => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const price = cartData.reduce((acc: number, item: CartData) => {
    acc += item.price * item.amount;
    return acc;
  }, 0);

  const priceVat: number = +(price * 0.2).toFixed(0);

  const totalPrice = price + 50;

  useEffect(() => {
    if (cartData.length === 0)
      setTimeout(() => {
        navigate("/");
      }, 3000);
  }, [cartData]);

  if (cartData.length === 0)
    return (
      <main className="flex h-screen items-center justify-center px-[5%] xl:px-[10%]">
        <h1 className="text-4xl font-bold">
          Cart is empty, you will be relocate to Home Page
        </h1>
      </main>
    );
  else
    return (
      <main className={`relative flex flex-col  `}>
        {submitSuccess && (
          <div className="absolute left-[5%] top-[10%] z-10 flex h-[600px] w-80 flex-col gap-4 rounded-lg bg-white p-8">
            <img src={confirmIcon} alt="Confirm order" className="h-16 w-16" />
            <h2 className="text-2xl font-bold uppercase">
              THANK YOU FOR YOUR ORDER
            </h2>
            <p>You will receive an email confirmation shortly.</p>
            <div>
              <div className="flex flex-col  gap-4 rounded-t-lg bg-grey-normal px-2 py-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-between gap-1">
                    <img
                      alt={cartData[0].name}
                      src={`/assets/cart/image-${cartData[0].slug}.jpg`}
                      className="h-[64px]"
                    />
                    <div className="flex flex-col gap-1">
                      <h2 className="font-bold">
                        {cartData[0].name.replace(
                          / (Headphones|Speaker|Earphones)/,
                          "",
                        )}
                      </h2>
                      <p className="font-bold opacity-50">
                        $ {cartData[0].price}
                      </p>
                    </div>
                  </div>
                  <p>x{cartData[0].amount}</p>
                </div>
                {cartData.length >= 2 && (
                  <div className="flex flex-col gap-4">
                    <div className="h-[1px] w-[90%] bg-black opacity-10"></div>
                    <p className="font-bold opacity-50">
                      and {cartData.length - 1} other item(s)
                    </p>
                  </div>
                )}
              </div>
              <div className="rounded-b-lg bg-black py-4 pl-6 text-white">
                <h3 className="uppercase opacity-50 ">grand total</h3>
                <p className="text-lg font-bold">
                  $ {new Intl.NumberFormat("en-US").format(totalPrice)}
                </p>
              </div>
            </div>
            <ButtonGold
              text="back to home"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
            />
          </div>
        )}
        <div
          className={`px-[5%] xl:px-[10%] ${
            submitSuccess && "bg-black/80 brightness-[.2]"
          }`}
        >
          <p
            onClick={backHandler}
            className="mt-4 cursor-pointer hover:text-gold-dark"
          >
            Go Back
          </p>
        </div>

        <section
          className={`flex flex-col gap-8 bg-black/80 px-[8%] pb-28 pt-12 lg:px-[15%] ${
            submitSuccess && "bg-black/80 brightness-[.2]"
          }`}
        >
          <h1 className="text-3xl font-bold uppercase">checkout</h1>
          <form className="flex flex-col gap-8 " onSubmit={formSubmit}>
            <div className="flex flex-col gap-6 ">
              <h2 className="flex-nowrap text-sm font-bold uppercase tracking-widest text-gold-dark">
                Billing details
              </h2>
              <div className="flex flex-col gap-6  md:flex-row md:flex-wrap md:gap-2">
                <InputCheckout
                  type="text"
                  placeholder="Jan Kowalski"
                  onChange={(e: any) => {
                    const input = e.target.value;
                    let inputName = input.replace(/[^a-zA-Z\s]/g, "");

                    setName(inputName);
                  }}
                  label="Name"
                  value={name}
                  max={30}
                  error={nameError}
                />
                <InputCheckout
                  type="email"
                  placeholder="test@test.com"
                  onChange={(e: any) => {
                    setMail(e.target.value);
                  }}
                  label="Email Address"
                  value={mail}
                  max={30}
                  error={mailError}
                />
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <label className="text-xs font-bold" htmlFor="Phone Number">
                      Phone Number
                    </label>
                    {phoneNumberError && <p>Wrong format</p>}
                  </div>

                  <input
                    type="tel"
                    className="h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 outline-none placeholder:opacity-50 hover:border-gold-dark focus:border-gold-dark md:w-[310px] md:gap-2"
                    placeholder="123 456 789"
                    maxLength={9}
                    inputMode="numeric"
                    value={phoneNumber}
                    id="Phone Number"
                    onChange={(e: any) => {
                      const input = e.target.value;
                      let inputNumber = input.replace(/\D/g, "");

                      setPhoneNumber(inputNumber);
                    }}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gold-dark">
                shipping info
              </h2>

              <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-2">
                <InputCheckout
                  type="text"
                  placeholder="Warszawska 1000"
                  onChange={(e: any) => {
                    const input = e.target.value;

                    setAddress(input);
                  }}
                  label="Your Address"
                  value={address}
                  max={30}
                  error={addressError}
                />

                <InputCheckout
                  type="text"
                  placeholder="00-000"
                  onChange={(e: any) => {
                    const input = e.target.value;
                    let inputNumber = input.replace(/\D/g, "");

                    let formattedCode = "";
                    for (let i = 0; i < inputNumber.length; i++) {
                      if (i === 2) formattedCode += "-";
                      formattedCode += inputNumber[i];
                    }
                    setCode(formattedCode);
                  }}
                  label="ZIP-Code"
                  value={code}
                  max={6}
                  error={codeError}
                />

                <InputCheckout
                  type="text"
                  placeholder="Warszawa"
                  onChange={(e: any) => {
                    const input = e.target.value;
                    let inputCity = input.replace(/[^a-zA-Z\s]/g, "");

                    setCity(inputCity);
                  }}
                  label="City"
                  value={city}
                  max={20}
                  error={cityError}
                />

                <InputCheckout
                  type="text"
                  placeholder="Poland"
                  onChange={(e: any) => {
                    const input = e.target.value;
                    let inputCountry = input.replace(/[^a-zA-Z\s]/g, "");

                    setCountry(inputCountry);
                  }}
                  label="Country"
                  value={country}
                  max={20}
                  error={countryError}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 ">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gold-dark">
                payment details
              </h2>
              <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-2">
                <div
                  className={`${
                    typePayment === "card" && "border-gold-dark"
                  } flex h-14 w-72 cursor-pointer items-center  gap-4 rounded-lg border border-grey-normal px-6 py-4 hover:border-gold-dark md:w-[310px]`}
                  onClick={() => setTypePayment("card")}
                >
                  <input
                    readOnly
                    value="card"
                    type="radio"
                    id="card"
                    checked={typePayment === "card"}
                    className="  relative h-5 w-5 cursor-pointer appearance-none rounded-full border  text-black before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:checked:h-[10px] before:checked:w-[10px] before:checked:bg-gold-dark"
                  />
                  <label htmlFor="card" className=" cursor-pointer">
                    e-Money
                  </label>
                </div>
                <div
                  className={`${
                    typePayment === "cash" && "border-gold-dark"
                  } flex h-14 w-72 cursor-pointer items-center  gap-4 rounded-lg border border-grey-normal px-6 py-4 hover:border-gold-dark md:w-[310px]`}
                  onClick={() => setTypePayment("cash")}
                >
                  <input
                    readOnly
                    value="cash"
                    type="radio"
                    id="cash"
                    checked={typePayment === "cash"}
                    className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border  text-black before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:checked:h-[10px] before:checked:w-[10px] before:checked:bg-gold-dark"
                  />
                  <label htmlFor="cash" className="cursor-pointer">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              {typePayment === "card" && (
                <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-2">
                  <InputCheckout
                    type="text"
                    placeholder="123456789"
                    onChange={(e: any) => {
                      const input = e.target.value;
                      let inputEMoney = input.replace(/\D/g, "");

                      setEMoney(inputEMoney);
                    }}
                    label="e-Money Number"
                    value={eMoney}
                    max={9}
                    error={eMoneyError}
                  />
                  <InputCheckout
                    type="text"
                    placeholder="1234"
                    onChange={(e: any) => {
                      const input = e.target.value;
                      let inputECode = input.replace(/\D/g, "");

                      setECode(inputECode);
                    }}
                    label="e-Money PIN"
                    value={eCode}
                    max={4}
                    error={eCodeError}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-lg font-bold uppercase tracking-widest">
                summary
              </h2>
              <ul>
                {cartData.map((item: CartData, id) => {
                  return (
                    <li
                      key={id}
                      className="flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center justify-center gap-4">
                        <img
                          alt={item.name}
                          src={`/assets/cart/image-${item.slug}.jpg`}
                          className="h-[64px]"
                        />
                        <div className="flex flex-col gap-1">
                          <h2 className="font-bold">
                            {item.name.replace(
                              / (Headphones|Speaker|Earphones)/,
                              "",
                            )}
                          </h2>
                          <p className="font-bold opacity-50">$ {item.price}</p>
                        </div>
                      </div>
                      <p>x{item.amount}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium uppercase opacity-50">total</h3>
                    <p className="text-lg font-bold">
                      $ {new Intl.NumberFormat("en-US").format(price)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="font-medium uppercase opacity-50">
                      shipping
                    </h3>
                    <p className="text-lg font-bold">$ 50</p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="font-medium uppercase opacity-50">
                      vat (included)
                    </h3>
                    <p className="text-lg font-bold">
                      $ {new Intl.NumberFormat("en-US").format(priceVat)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-medium uppercase opacity-50">
                    grand total
                  </h3>
                  <p className="text-lg font-bold text-gold-dark">
                    $ {new Intl.NumberFormat("en-US").format(totalPrice)}
                  </p>
                </div>
                <button className="flex h-[40px] w-[160px] cursor-pointer items-center justify-center bg-gold-dark text-white transition-all duration-300 hover:bg-gold-lighter active:scale-110 md:w-[100%] md:self-center">
                  Continue to pay
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    );
};

export default Checkout;
