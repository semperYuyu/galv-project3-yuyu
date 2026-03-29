import Player from "./Player";
import Door from "./Door";
import InputField from "./InputField";
export default function Register() {
  return (
    <div className={"flex flex-col "}>
      <div className={"flex flex-col items-center mt-10 gap-2"}>
        <InputField field="username" />
        <InputField field="password" />
        <button
          id="register"
          className={
            "bg-white rounded-2xl p-2 border-2 hover:bg-gray-500 hover:scale-110 hover:cursor-pointer"
          }
        >
          {" "}
          register !
        </button>
      </div>
      <Player />
      <Door name="Home" />
    </div>
  );
}
