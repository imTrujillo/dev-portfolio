type Props = {
  name?: string;
  type?: string;
  placeholder?: string;
};

function Input({ name, type, placeholder }: Props) {
  switch (type) {
    case "textarea":
      return (
        <textarea
          className="w-full bg-transparent border-b border-white/20 px-0 text-white/60 tracking-wide placeholder:text-white/30 focus:outline-none focus:border-[#944038] transition-all duration-500 ease-in-out"
          name={name}
          rows={3}
          placeholder={placeholder}
          required
        ></textarea>
      );
    default:
      return (
        <input
          className="w-full bg-transparent border-b border-white/20 px-0 text-white/60 tracking-wide placeholder:text-white/30 focus:outline-none focus:border-[#944038] transition-all duration-500 ease-in-out"
          name={name}
          type={type}
          placeholder={placeholder}
          required
        />
      );
  }
}

export default Input;
