import { useGridCols } from "../../hooks/useGridCols";

type Skill = {
  img: string;
  label: string;
};
type Props = {
  label: string;
  skills: Skill[];
};

function Grid({ label, skills }: Props) {
  const cols = useGridCols();

  const isRed = (i: number) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    return (row + col) % 2 === 0;
  };

  return (
    <div>
      <h6 className="text-[#bb6961]/80  text-2xl md:text-4xl lg:text-8xl px-4 mb-2 normal-case!">
        {label}
      </h6>
      <div className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`aspect-square flex flex-col justify-end items-center pb-4 text-white group
          ${isRed(i) ? "bg-[#24335c]/5" : "bg-[#741f18]/10"}
        `}
          >
            <img
              src={skill.img}
              className="w-[50%] max-h-[70%] mb-4 group-hover:scale-110 scale-100 duration-100"
            />
            <p className="group-hover:scale-110 scale-100 duration-100">
              {skill.label}
            </p>
          </div>
        ))}

        <div className=" absolute inset-y-0 left-0 w-60 bg-linear-to-r from-[#741f18]/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default Grid;
