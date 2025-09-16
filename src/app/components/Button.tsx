interface Props {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const Button = ({ children, type = "button", onClick = () => {} }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-[16px] px-8 py-2 shadow-md shadow-[rgba(0,0,0,0.25)]
                 bg-[#e4e3e3] cursor-pointer hover:scale-105 active:scale-95
                 transition-transform duration-100 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
