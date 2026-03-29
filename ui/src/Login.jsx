import Player from "./Player";
import Door from "./Door";
import InputField from "./InputField";
export default function Login() {
  return (
    <div className={"flex flex-col "}>
      <div className={"flex flex-col items-center mt-10 gap-2"}>
        <InputField field="username" />
        <InputField field="password" />
        <button
          id="logIn"
          className={
            "bg-white p-2 rounded-2xl border-2 hover:bg-gray-500 hover:scale-110 hover:cursor-pointer"
          }
        >
          {" "}
          Log IN
        </button>
      </div>
      <Player />
      <Door name="Home" />
    </div>
  );
}
