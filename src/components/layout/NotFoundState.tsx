import Filter from "../common/Filter";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type Props = {
  label: string;
};

function NotFoundState({ label }: Props) {
  const navigate = useNavigate();

  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center gap-8 bg-black text-white">
      <Filter />
      <Title label={label} />
      <Button
        label="VOLVER"
        icon={<IoArrowBack />}
        onClick={() => navigate("/")}
        colors={[
          "from-rose-300",
          "to-blue-300",
          "text-blue-200",
          "after:bg-gray-800",
        ]}
      />
    </div>
  );
}

export default NotFoundState;
