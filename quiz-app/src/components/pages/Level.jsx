export default function Level({ level, setLevel }) {
  return (
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
  );
}