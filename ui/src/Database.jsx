import Player from "./Player";
import Door from "./Door";
import { useNavigate } from "react-router";
export default function Database() {
  return (
    <>
      <Player />
      <Door name="Home" />
    </>
  );
}
