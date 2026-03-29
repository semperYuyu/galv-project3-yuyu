import Door from "./Door";
import Player from "./Player";
import { useNavigate } from "react-router";
export default function Home() {
  return (
    <div className={"flex flex-col gap-34"}>
      <Door name="Register" />
      <Player />
      <div className={"flex justify-between"}>
        <Door name="Login" />

        <Door name="API" />
      </div>
      <Door name="Database" />
    </div>
  );
}
