import type { JSX } from "react";

type Props = {
  label: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  colors?: Array<string>;
  disabled?: boolean;
};

const Button = ({
  label,
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  colors = [
    "from-yellow-400/60",
    "to-orange-500/70",
    "text-orange-500/70",
    "after:bg-orange-900",
  ],
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex bg-black/50! justify-center items-center rounded-full! outline-2 outline-white/30 relative overflow-hidden backdrop-blur-xs border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 ${colors[3]} hover:after:opacity-80 hover:after:scale-[2.5] border-transparent focus:outline-none! active:outline-none! active:border-none! hover:border-none!`}
    >
      <span
        className={`flex items-center gap-2 relative text-transparent bg-clip-text bg-linear-to-l ${colors[0]}  ${colors[1]} z-10 font-bold uppercase`}
      >
        {icon && iconPosition === "left" && (
          <span className={colors[2]}>{icon}</span>
        )}
        <span>{label}</span>
        {icon && iconPosition === "right" && (
          <span className={colors[2]}>{icon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;
