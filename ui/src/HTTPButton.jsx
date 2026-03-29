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
    >
      <h1> {method || "Null"} </h1>
    </div>
  );
}
