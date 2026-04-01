import Door from "./Door";
import HTTPButton from "./HTTPButton";
import InputField from "./InputField";
import Cookies from "js-cookie";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function API() {
  const user = Cookies.get("user");
  let { theme, setTheme } = useContext(ThemeContext);

  if (!user) {
    return (
      <div className={"flex flex-col items-center font-bold text-2xl "}>
        <h2> go login or register you goober !! </h2>
        <Door name="Home" />
        <div className={"flex"}>
          <Door name="Login" />
          <Door name="Register" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={"flex flex-col items-center gap-10 h-209"}
      id={theme == "dark" ? "HomeAPI" : "OfficeAPI"}
    >
      <div className={"flex gap-10 justify-center"}>
        <HTTPButton method="GET" />
        <HTTPButton method="POST" />
        <HTTPButton method="PATCH" />
        <HTTPButton method="DELETE" />
      </div>

      <InputField type="request" />
      <Door name="Home" classes={"translate-y-40"}/>
    </div>
  );
}
