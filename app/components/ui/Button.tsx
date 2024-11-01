import { ReactNode } from "react";

export interface ButtonProps {
  size?: "default" | "sm" | "lg" | "icon" | "full";
  children: ReactNode;
  variant?: "default" | "secondary" | "outline";
  disabled?: boolean;
  showText?: boolean;
  href?: string;
  className?: string;
  type?: "submit" | "button";
  handlerClick?: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLButtonElement>;

}

const Button: React.FC<ButtonProps> = ({
  size = "default",
  children,
  variant = "default",
  disabled = false,
  showText = true,
  href,
  className,
  handlerClick,
}) => {
  const variants = {
    default:
      "bg-blue-700  hover:bg-blue-500 active:bg-blue-800 text-white w-fit ",
    secondary:
      "bg-blue-200 hover:bg-neutral-300 active:bg-neutral-400 text-neutral-800 ",
    outline:
      "bg-white border-2 hover:bg-neutral-200 active:bg-neutral-100 text-neutral-800 ",
  };

  const sizes = {
    default: "w-16 h-10 py-2 px-4 ",
    sm: "w-16 h-9 py-2 px-3",
    lg: "w-28 h-11 py-2 px-8",
    icon: "w-10 h-10",
    full: "flex-1 h-10 w-full py-2 px-4",
  };

  const disabledClass = "opacity-50 cursor-not-allowed";
  const focusUnderlineClass = href ? "underline" : "";

  const Component = typeof href === "string" ? "a" : "button";

  return (
    <Component
      href={href}
      className={`rounded-md flex justify-center items-center focus:ring focus:ring-neutral-400 ${
        sizes[size]
      } ${variants[variant]} ${
        disabled ? disabledClass : ""
      } ${focusUnderlineClass} ${className}`}
      disabled={disabled}
      onClick={handlerClick}
    >
      <span
        className={`${
          showText
            ? "flex text-sm leading-5 font-medium items-center"
            : "hidden"
        }`}
      >
        {children}
      </span>
    </Component>
  );
};

export default Button;
