import Door from "./Door";

export default function Spawn() {
  return (
    <div className={"mt-2 h-150 flex justify-center items-center"}>
      <Door name="Home" />
    </div>
  );
}
