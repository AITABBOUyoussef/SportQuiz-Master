export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5 rounded-2xl mb-5 shadow-md">
      <h2 className="text-lg font-bold">Play and Win</h2>
      <p className="text-sm opacity-80">Start now and enjoy</p>

      <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
        Get started
      </button>
    </div>
  );
}