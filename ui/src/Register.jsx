import Door from "./Door";
import InputField from "./InputField";
import { ThemeContext } from "../contexts/ThemeContext";
import { useRef, useContext } from "react";

export default function Register() {
  let userRef = useRef(null);
  let passwordRef = useRef(null);

  let { theme, setTheme } = useContext(ThemeContext);

  const register = () => {
    let user = userRef.current.value;
    let password = passwordRef.current.value;
    let info = document.querySelector("#fetchAwait");
    let ranNum = document.querySelector("#random");
    let pokemon = ranNum.value || 1;
    info.innerHTML = "registering...";
    if (pokemon < 1 || pokemon > 18) {
      info.innerHTML =
        "you're going to break the database... change your number (1-18)!!!!";
      return;
    }

    fetch("http://localhost:8080/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password, pokemon }),
    })
      .then((data) => data.json())
      .then((data) => (info.innerHTML = data.message));

    console.log(user, password);
  };
  return (
    <div
      className={"flex flex-col h-220 mt-2 ml-2"}
      id={theme == "dark" ? "HomeRegister" : "OfficeRegister"}
    >
      <div className={"flex flex-col items-center mt-10 gap-2"}>
        <InputField ref={userRef} field="username" />
        <InputField ref={passwordRef} field="password" />
        <input
          type="text"
          id={"random"}
          placeholder={"random number from 1-18"}
          className={"bg-white w-[20%] border-2 rounded-md "}
        />
        <button
          id="register"
          onClick={register}
          className={
            "bg-white rounded-2xl p-2 border-2 hover:bg-gray-500 hover:scale-110 hover:cursor-pointer"
          }
        >
          {" "}
          register !
        </button>
        <h2
          id={"fetchAwait"}
          className={
            "bg-white text-center font-bold rounded-md border-2 wrap-break-word w-50"
          }
        ></h2>
      </div>
      <div className={" flex justify-center"}>
        <Door name="Home" />
      </div>
    </div>
  );
}
