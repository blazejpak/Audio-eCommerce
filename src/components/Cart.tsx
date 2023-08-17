import { useAppSelector } from "../store/hooks";
import { motion } from "framer-motion";
import ButtonGold from "../ui/ButtonGold";
import AmountChanger from "../ui/AmountChanger";
import { useEffect, useState } from "react";

const Cart = () => {
  const data = useAppSelector((state) => state.storeSlice.data);

  const groupAmount = data.reduce((result, item) => {
    if (!result[item.name]) {
      result[item.name] = { ...item, amount: 0 };
    }
    result[item.name].amount += item.amount;
    return result;
  }, {});

  const cartData = Object.values(groupAmount);

  const [finalData, setFinalData] = useState(cartData);

  const minusHandler = (item: any) => {
    const updatedData = finalData.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.amount > 0) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    const filteredData = updatedData.filter((item) => item.amount !== 0);
    setFinalData(filteredData);
  };

  const plusHandler = (item: any) => {
    console.log(item);
    const updatedData = finalData.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.amount > 0) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    setFinalData(updatedData);
  };

  const totalPrice = finalData.reduce((acc: number, item: any) => {
    acc += item.price * item.amount;
    return acc;
  }, 0);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: "100%", opacity: 0 }}
      className="absolute right-[5%] top-[120px] z-20 flex h-[480px] w-80  flex-col gap-10   rounded-lg bg-white p-4 text-black md:w-96"
    >
      <div className="flex justify-between ">
        <h2>Cart</h2>
        <p>Remove all</p>
      </div>
      <ul className="flex h-60 flex-col gap-4 overflow-auto">
        {finalData.map((item: any, id) => {
          return (
            <li key={id} className="flex items-center justify-between gap-2">
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
      <div className="flex justify-between">
        <p>total</p>
        <p>$ {totalPrice}</p>
      </div>
      <div className="self-center">
        <ButtonGold text="checkout" onClick={() => {}} />
      </div>
    </motion.div>
  );
};

export default Cart;
