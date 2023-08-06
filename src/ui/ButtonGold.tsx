interface buttonGoldProps {
  onClick: any;
  text: string;
}

const ButtonGold = ({ onClick, text }: buttonGoldProps) => {
  return (
    <div
      onClick={onClick}
      className="flex h-[40px] w-[160px] cursor-pointer items-center justify-center bg-gold-dark transition-all duration-300 hover:bg-gold-lighter"
    >
      <p className="text-sm font-bold uppercase tracking-widest text-white">
        {text}
      </p>
    </div>
  );
};

export default ButtonGold;
