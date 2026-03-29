import { useNavigate } from "react-router";

export default function Door({ name }) {
  const navigate = useNavigate();
  let location = name.toLowerCase();

  return (
    <div
      id={`door-to-${name || "Nowhere"}`}
      className={"flex flex-col items-center"}
    >
      <h1 className={"text-bold text-white text-lg"}> {name || "Nowhere"} </h1>
      <img
        src="/door.png"
        alt="door"
        className={"w-25"}
        onClick={() => navigate(`/${location}`)}
      />
    </div>
  );
}
