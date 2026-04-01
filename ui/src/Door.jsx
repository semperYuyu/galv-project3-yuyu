import { useNavigate } from "react-router";

export default function Door({ name, classes }) {
  const navigate = useNavigate();
  let location = name.toLowerCase();

  return (
    <div className={classes}>
      <div
        id={`door-to-${name || "Nowhere"}`}
        className={
          "flex flex-col items-center border-3 w-30 h-auto rounded-lg border-b-5 bg-gray-500"
        }
      >
        <h1 className={"text-bold text-white text-xl"}>
          {" "}
          {name || "Nowhere"}{" "}
        </h1>
        <img
          src="/door.png"
          alt="door"
          className={
            "w-25 transition-transform duration-250 hover:scale-130 ease-in-out hover:cursor-pointer"
          }
          onClick={() => navigate(`/${location}`)}
        />
      </div>
    </div>
  );
}
