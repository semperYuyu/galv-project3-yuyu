export default function InputField({ field, type, sql }) {
  if (type == "request") {
    return (
      <input
        type="text"
        placeholder={`input ${sql ? "SQL" : "body"} here :D`}
        className={
          "bg-white w-100 h-50 rounded-md border-3 border-gray-600 border-b-10 text-center border-l-10 border-r-10 border-l-black border-r-black"
        }
      ></input>
    );
  }
  return (
    <>
      <input
        type={`${field || "text"}`}
        placeholder={`${field || "N/A"}...`}
        className={
          "bg-white text-center font-bold rounded-md border-2 border-black w-[20%] h-10"
        }
      ></input>
    </>
  );
}
