import { useAppDispatch, useAppSelector } from "../store/hooks";
import { motion } from "framer-motion";
import ButtonGold from "../ui/ButtonGold";
import AmountChanger from "../ui/AmountChanger";
import { useEffect, useRef, useState } from "react";

import { PiShoppingCart } from "react-icons/pi";
import { useNavigate } from "react-router";

export interface CartData {
  name: string;
  amount: number;
  slug: string;
  price: number;
}

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const data = useAppSelector((state) => state.storeSlice.data);
  const isCartActive = useAppSelector(
    (state) => state.activePageSlice.cartActive,
  );

  const cartRef = useRef<HTMLDivElement>(null);

  const groupAmount = data.reduce((result, item) => {
    if (!result[item.name]) {
      result[item.name] = { ...item, amount: 0 };
    }
    result[item.name].amount += item.amount;
    return result;
  }, {});

  const cartData: CartData[] = Object.values(groupAmount);

  const [finalData, setFinalData] = useState(cartData);

  const minusHandler = (item: CartData) => {
    const updatedData = finalData.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.amount > 0) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    const filteredData = updatedData.filter((item) => item.amount !== 0);
    setFinalData(filteredData);
  };

  const plusHandler = (item: CartData) => {
    console.log(item);
    const updatedData = finalData.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.amount > 0) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    setFinalData(updatedData);
  };

  const clearData = () => {
    dispatch({ type: "store/clearData" });
    setFinalData([]);
    console.log("clicked");
  };

  //Sending final data to store
  useEffect(() => {
    dispatch({ type: "store/updateData", payload: finalData });
  }, [finalData]);

  const checkoutHandler = (): void => {
    navigate("/checkout");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const totalPrice = finalData.reduce((acc: number, item: CartData) => {
    acc += item.price * item.amount;
    return acc;
  }, 0);
  console.log(isCartActive);
  useEffect(() => {
    const handler = (event: any) => {
      if (isCartActive) {
        if (!cartRef.current) return;
        else if (!cartRef.current.contains(event.target) && isCartActive) {
          dispatch({ type: "activePage/cartActive", payload: false });
          event.stopPropagation();
        }
      }
      return;
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isCartActive]);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: "100%", opacity: 0 }}
      className="absolute right-[5%] top-[120px] z-20  max-h-[480px]  w-80    rounded-lg bg-white p-4 text-black md:w-96"
      ref={cartRef}
    >
      {finalData.length === 0 ? (
        <div className="flex  items-center justify-between gap-6">
          <h2 className="text-2xl font-bold uppercase">Cart is empty</h2>
          <PiShoppingCart size={64} className="fill-gold-dark" />
        </div>
      ) : (
        <div className="flex flex-col gap-10 ">
          <div className="flex justify-between ">
            <h2 className="text-lg font-bold uppercase">
              Cart ({finalData.length})
            </h2>
            <p
              className={`cursor-pointer underline opacity-50 hover:text-gold-dark active:text-gold-lighter 
            `}
              onClick={clearData}
            >
              Remove all
            </p>
          </div>
          <ul className="flex max-h-60 flex-col gap-4 overflow-auto pr-2">
            {finalData.map((item: CartData, id) => {
              return (
                <li
                  key={id}
                  className="flex items-center justify-between gap-2"
                >
                  <img
                    alt={item.name}
                    src={`/assets/cart/image-${item.slug}.jpg`}
                    className="h-[64px]"
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className="font-bold">
                      {item.name.replace(/ (Headphones|Speaker|Earphones)/, "")}
                    </h2>
                    <p className="font-bold opacity-50">$ {item.price}</p>
                  </div>
                  <AmountChanger
                    amount={item.amount}
                    minus={() => minusHandler(item)}
                    plus={() => plusHandler(item)}
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between font-bold">
            <p className="uppercase opacity-50">total</p>
            <p>$ {totalPrice}</p>
          </div>
          <div className={`self-center `}>
            <ButtonGold text="checkout" onClick={checkoutHandler} />
            <p>{}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
