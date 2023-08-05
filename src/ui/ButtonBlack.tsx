interface buttonBlackProps {
  onClick: any;
  text: string;
}

const ButtonBlack = ({ onClick, text }: buttonBlackProps) => {
  return (
    <div
      onClick={onClick}
      className="flex h-[40px] w-[160px] cursor-pointer items-center justify-center bg-black transition-all duration-300 hover:bg-black-lighter hover:bg-opacity-90 "
    >
      <p className="text-sm font-bold uppercase tracking-widest text-white">
        {text}
      </p>
    </div>
  );
};

export default ButtonBlack;
