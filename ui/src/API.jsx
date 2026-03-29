import Player from "./Player";
import Door from "./Door";
import HTTPButton from "./HTTPButton";
import InputField from "./InputField";

export default function API() {
  return (
    <div className={"flex flex-col items-center gap-10"}>
      <Player />
      <div className={"flex gap-10 justify-center"}>
        <HTTPButton method="GET" />
        <HTTPButton method="POST" />
        <HTTPButton method="PATCH" />
        <HTTPButton method="DELETE" />
      </div>

      <InputField type="request" />
      <Door name="Home" />
    </div>
  );
}
