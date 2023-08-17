const AmountChanger = ({ minus, plus, amount }) => {
  console.log(amount);
  return (
    <div className="flex h-12 w-32 items-center justify-around bg-grey-normal px-2">
      <span className="cursor-pointer opacity-25" onClick={minus}>
        -
      </span>
      <p className="w-10 text-center">{amount}</p>

      <span className="cursor-pointer opacity-25" onClick={plus}>
        +
      </span>
    </div>
  );
};

export default AmountChanger;
