interface buttonWhiteProps {
  onClick: any;
  text: string;
}

const ButtonWhite = ({ onClick, text }: buttonWhiteProps) => {
  return (
    <div
      onClick={onClick}
      className="flex h-[40px] w-[160px] cursor-pointer items-center justify-center border border-black bg-transparent transition-all  duration-300 hover:bg-black hover:text-white"
    >
      <p className="text-sm font-bold uppercase tracking-widest">{text}</p>
    </div>
  );
};

export default ButtonWhite;
