import { useState } from "react";

function App() {
  let speed = 10;
  let xSpeed = 5;
  let ySpeed = 5;

  window.addEventListener("keydown", (key) => {
    // not using key yet
    let player = document.querySelector("#mover");
    let { x, y } = player.getBoundingClientRect();
    // getBoundingClientRect returns position of element relative to viewport
    console.log(`x: ${x} y:${y}`);
    console.log(key.key);
    switch (key.key) {
      case "w":
        ySpeed -= speed;
        player.src = "/pcBack.png";
        player.style.transform = `translate(${xSpeed}px, ${ySpeed}px)`;
        break;

      case "a":
        xSpeed -= speed;
        player.src = "/pcLeft.png";
        player.style.transform = `translate(${xSpeed}px, ${ySpeed}px)`;
        break;

      case "s":
        ySpeed += speed;
        player.src = "/pcFront.png";
        player.style.transform = `translate(${xSpeed}px, ${ySpeed + 5}px)`;
        break;

      case "d":
        xSpeed += speed;
        player.src = "/pcRight.png";
        player.style.transform = `translate(${xSpeed + 5}px, ${ySpeed}px)`;
        break;
      default:
        break;
    }
  });

  return (
    <>
      <img id={"mover"} className={"w-15"} src="/pcFront.png" />
      <h2> :3 </h2>
    </>
  );
}

export default App;
