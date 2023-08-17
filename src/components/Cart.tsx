import { useAppSelector } from "../store/hooks";

const Cart = () => {
  const data = useAppSelector((state) => state.storeSlice.data);
  console.log(data);

  return <div>Cart</div>;
};

export default Cart;
