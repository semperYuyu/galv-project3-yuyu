export default function HTTPButton({ method }) {
  let colour;
  switch (method) {
    case "GET":
      colour = "text-green-400";
      break;

    case "POST":
      colour = "text-amber-400";
      break;

    case "PATCH":
      colour = "text-blue-400";
      break;

    case "DELETE":
      colour = "text-red-400";
      break;

    default:
      colour = "text-purple-400";
      break;
  }

  const requestSender = () => {
    let bodyElem = document.querySelector("#reqBody");
    let tableElem = document.querySelector("#tableQuery");
    let display = document.querySelector("#fetchAwait");
    let table = tableElem.value;
    let reqBody = bodyElem.value;
    let url = table
      ? `http://localhost:8080/${table}`
      : "http://localhost:8080/";

    if (method == "GET") {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          console.log(data.message);
          display.innerHTML = JSON.stringify(data.message);
          console.log(display.innerHTML);
        });
    } else if (method == "POST") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBody,
      })
        .then((data) => data.json())
        .then((data) => (display.innerHTML = JSON.stringify(data.message)));
    } else if (method == "PATCH") {
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBody,
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          display.innerHTML = JSON.stringify(data.message);
        });
    } else if (method == "DELETE") {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBody,
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          display.innerHTML = JSON.stringify(data.message);
        });
    }
  };

  return (
    <div
      className={`
        text-bold
        ${colour}
        text-2xl
        font-[superBold]
        bg-gray-700
        p-2
        rounded-2xl
        border-5
        border-b-10
        border-black
        hover:bg-black
        transition-transform
        duration-250
        hover:scale-150 ease-in-out
        hover:cursor-pointer
        h-20
        w-30
        flex
        items-center
        justify-center
        font-
        `}
      onClick={requestSender}
    >
      <h1> {method || "Null"} </h1>
    </div>
  );
}
