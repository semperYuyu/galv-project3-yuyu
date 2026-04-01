import { forwardRef, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"

const InputField = forwardRef(({ field, type }, ref) => {
  let { theme } = useContext(ThemeContext)
  if (type == "request") {
    return (
      <div className={"flex flex-col items-center"}>
        <input
          type="text"
          id={"tableQuery"}
          placeholder="table name here"
          className={"bg-white text-center w-50 border-2 rounded-2xl translate-y-29"}
        ></input>
        <input
          type="text"
          id={"reqBody"}
          placeholder={`input body here :D`}
          className={
            theme == "dark" ? "w-138 h-80 bg-white text-center rounded-md text-wrap translate-y-35 translate-x-2" : "w-138 h-80 text-center rounded-md text-wrap translate-y-35 translate-x-2"
          }
        ></input>
        <h2
          id={"fetchAwait"}
          className={
            "bg-white text-center font-bold rounded-md border-2 wrap-break-word w-150  translate-y-40"
          }
        ></h2>
      </div>
    );
  }
  return (
    <>
      <input
        ref={ref}
        type={`${field == "password" ? "password" : "text"}`}
        placeholder={`${field || "N/A"}...`}
        className={
          "bg-white text-center font-bold rounded-md border-2 border-black w-[20%] h-10"
        }
      ></input>
    </>
  );
});

export default InputField;
