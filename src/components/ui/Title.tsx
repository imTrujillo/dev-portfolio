type Props = {
  label: string;
  size?: "small" | "normal";
  children?: React.ReactNode;
};

function Title({ label, size = "normal", children }: Props) {
  let fontSize = "";
  switch (size) {
    case "small":
      fontSize = "lg:text-[5rem]! xl:text-[7rem]!";
      break;
    case "normal":
      fontSize = "lg:text-[8rem]! xl:text-[10rem]!";
  }
  return (
    <h4
      className={`text-4xl ${fontSize} text-white/40 font-bold leading-[0.9]! mb-2`}
    >
      {label}
      {children}
    </h4>
  );
}

export default Title;
