export default function Header() {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <div className="w-10 h-10 bg-gray-300 rounded-full">
        <img src="img.png" alt="avatar" />
      </div>

      <input
        type="text"
        placeholder="Search for a quiz"
        className="bg-gray-200 rounded-xl p-3 outline-none"
      />
    </div>
  );
}