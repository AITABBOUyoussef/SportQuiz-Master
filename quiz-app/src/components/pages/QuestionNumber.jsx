export default function QuestionNumber({ number, setNumber }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Number of questions</h3>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="bg-white p-3 rounded-xl w-24 shadow"
      />
    </div>
  );
}