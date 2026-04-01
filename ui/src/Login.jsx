import Door from "./Door";
import InputField from "./InputField";
import { useRef, useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Login() {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  const user = Cookies.get("user");
  let { theme, setTheme } = useContext(ThemeContext);

  if (user) {
    return (
      <div
        className={"flex flex-col items-center gap-5 h-220"}
        id={"HomeLogin"}
      >
        {" "}
        <h1>you're already logged in !!!</h1>
        <button
          className={
            "bg-white rounded-md p-2 font-bold hover:bg-gray-400 hover:scale-110"
          }
          onClick={() => {
            Cookies.remove("user");
            navigate("/");
          }}
        >
          {" "}
          Log Out
        </button>
        <Door name="Home" />
      </div>
    );
  }

  const login = () => {
    let user = userRef.current.value;
    let password = passRef.current.value;
    let info = document.querySelector("#fetchAwait");
    info.innerHTML = "sending info to server...";

    fetch("http://localhost:8080/auth", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    })
      .then((data) => data.json())
      .then((data) => {
        info.innerHTML = data.message;
        localStorage.setItem("justLoggedIn", "true");
      });
  };
  return (
    <div
      className={"flex flex-col h-220 ml-5"}
      id={theme == "dark" ? "HomeLogin" : "OfficeLogin"}
    >
      <div className={"flex flex-col items-center mt-10 gap-2"}>
        <InputField ref={userRef} field="username" />
        <InputField ref={passRef} field="password" />
        <button
          id="logIn"
          onClick={login}
          className={
            "bg-white p-2 rounded-2xl border-2 hover:bg-gray-500 hover:scale-110 hover:cursor-pointer"
          }
        >
          {" "}
          Log IN
        </button>
        <h2
          id={"fetchAwait"}
          className={
            "bg-white text-center font-bold rounded-md border-2 wrap-break-word w-50"
          }
        ></h2>
      </div>
      <div className={"flex justify-center"}>
        <Door name="Home" />
      </div>
    </div>
  );
}
