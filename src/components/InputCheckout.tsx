interface InputCheckout {
  label: string;
  value: any;
  onChange: any;
  placeholder: string;
  type: string;
  max: number;
  error: boolean;
}

const InputCheckout = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  max,
  error,
}: InputCheckout) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <label htmlFor={label} className="text-xs font-bold">
          {label}
        </label>
        {error && (
          <p className="text-xs font-medium text-red-600">Wrong format</p>
        )}
      </div>
      <input
        type={type}
        className={`${
          error && "border-red-600"
        } h-14 w-72 rounded-lg border border-grey-normal bg-transparent px-6 py-4 caret-gold-dark outline-none placeholder:opacity-50 hover:border-gold-dark focus:border-gold-dark md:w-[310px]`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={label}
        required
        maxLength={max}
      />
    </div>
  );
};

export default InputCheckout;
