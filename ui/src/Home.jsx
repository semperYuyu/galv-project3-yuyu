import Door from "./Door";
import Player from "./Player";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Cookies from "js-cookie";

export default function Home() {
  let [pokemon, setPokemon] = useState(null);
  let { theme, setTheme } = useContext(ThemeContext);

  let userCookie = Cookies.get("user");

  useEffect(() => {
    fetch("http://localhost:8080/myPoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userCookie }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.message);

        if (!theme) {
          setTheme(data.message.theme);
        }

        if (localStorage.getItem("justLoggedIn") == "true") {
          setTheme(data.message.theme);
          localStorage.removeItem("justLoggedIn");
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${data.message.name}`)
          .then((data) => data.json())
          .then((data) => setPokemon(data.sprites.front_default));
      });
  }, []);
  let register =
    theme == "dark"
      ? "translate-x-26 translate-y-30"
      : "-translate-x-165 translate-y-10";

  let login =
    theme == "dark"
      ? "-translate-x-130 -translate-y-5"
      : "translate-y-[-650px] -translate-x-20";

  let api =
    theme == "dark" ? "translate-x-115 -translate-y-5" : "translate-x-270";

  let poke =
    theme == "dark"
      ? "-translate-x-297 translate-y-142"
      : "flex flex-col items-center -translate-x-125 translate-y-25";

  return (
    <div
      className={"flex flex-col gap-64 justify-between"}
      id={theme == "dark" ? "Home" : "Office"}
    >
      <div className={"flex justify-between h-34"}>
        <button
          className={
            "bg-white hover:scale-110 hover:bg-gray-400 h-8 p-2 flex items-center rounded-2xl hover:cursor-pointer translate-y-120 translate-x-2"
          }
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
        >
          {" "}
          Switch Theme{" "}
        </button>
        <Door name="Register" classes={register} />
        <div className={poke}>
          <h2 className={"text-white font-bold text-md"}>
            {" "}
            {`${userCookie}'s pokemon`}{" "}
          </h2>
          <img
            src={pokemon}
            alt={pokemon}
            className={
              "w-30 transition-transform duration-750 hover:scale-140 ease-in-out"
            }
          />
        </div>
      </div>

      <Player />

      <div className={"flex justify-between"}>
        <Door name="API" classes={api} />

        <Door name="Login" classes={login} />
      </div>
    </div>
  );
}
