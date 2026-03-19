export default function Categories({ setCategory }) {
  return (
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
  );
}