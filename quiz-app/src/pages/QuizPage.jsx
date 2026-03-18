import { useState } from "react";

export default function Quizpage() {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("easy");
  const [number, setNumber] = useState(10);

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="flex flex-col gap-3 mb-5">
        <div className="w-10 h-10 bg-gray-300 rounded-full"><img src="img.png" alt="avatar" /></div>

        <input
          type="text"
          placeholder="Search for a quiz"
          className="bg-gray-200 rounded-xl p-3 outline-none"
        />
      </div>

     
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5 rounded-2xl mb-5 shadow-md">
        <h2 className="text-lg font-bold">Play and Win</h2>
        <p className="text-sm opacity-80">Start now and enjoy</p>

        <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
          Get started
        </button>
      </div>

     
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <h3 className="font-semibold">Categories</h3>
          <span className="text-sm text-gray-500">See All</span>
        </div>

        <div className="flex gap-8 ml-10">
          <button
            onClick={() => setCategory("math")}
            className="bg-yellow-200 px-3 py-2 rounded-xl"
          >
            Math
          </button>

          <button
            onClick={() => setCategory("sport")}
            className="bg-yellow-200 px-3 py-2 rounded-xl"
          >
            Sport
          </button>

          <button
            onClick={() => setCategory("physics")}
            className="bg-yellow-200 px-3 py-2 rounded-xl"
          >
            Physics
          </button>
        </div>
      </div>

     
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Choisir le niveau</h3>

        <div className="flex gap-8 ml-8">
          <button
            onClick={() => setLevel("easy")}
            className={`px-3 py-2 rounded-xl ${
              level === "easy"
                ? "bg-green-500 text-white"
                : "bg-green-200"
            }`}
          >
            Facile
          </button>

          <button
            onClick={() => setLevel("medium")}
            className={`px-3 py-2 rounded-xl ${
              level === "medium"
                ? "bg-yellow-500 text-white"
                : "bg-yellow-200"
            }`}
          >
            Moyen
          </button>

          <button
            onClick={() => setLevel("hard")}
            className={`px-3 py-2 rounded-xl ${
              level === "hard"
                ? "bg-red-500 text-white"
                : "bg-red-200"
            }`}
          >
            Difficile
          </button>
        </div>
      </div>

      
      <div>
        <h3 className="font-semibold mb-2">Number of questions</h3>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="bg-white p-3 rounded-xl w-24 shadow"
        />
      </div>
    </div>
  );
}