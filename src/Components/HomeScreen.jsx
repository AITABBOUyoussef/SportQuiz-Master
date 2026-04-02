export default function HomeScreen({ difficulties, history, onStart }) {
  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* L'fo9: l'3onwan dyal l'app b lbyed o lk7el */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-gray-900 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-wide">
            SPORTQUIZ MASTER
          </h1>
          <p className="text-xl text-gray-700 font-bold">
            Choose a difficulty below to start your sports quiz!
          </p>
        </div>

        {/* L'i7sa2iyat (Stats) b alwan mjehda w bayna */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-blue-600 p-6 rounded-xl border-4 border-blue-900 text-center text-white shadow-lg">
            <p className="text-blue-200 font-bold text-sm uppercase tracking-wider">Difficulties</p>
            <p className="text-4xl font-black mt-2">{difficulties.length}</p>
          </div>
          <div className="bg-green-600 p-6 rounded-xl border-4 border-green-900 text-center text-white shadow-lg">
            <p className="text-green-200 font-bold text-sm uppercase tracking-wider">Recent Games</p>
            <p className="text-4xl font-black mt-2">{history.length}</p>
          </div>
          <div className="bg-yellow-400 p-6 rounded-xl border-4 border-yellow-600 text-center text-black shadow-lg">
            <p className="text-yellow-900 font-bold text-sm uppercase tracking-wider">Fast Start</p>
            <p className="text-2xl font-black mt-2">One tap</p>
          </div>
          <div className="bg-red-600 p-6 rounded-xl border-4 border-red-900 text-center text-white shadow-lg">
            <p className="text-red-200 font-bold text-sm uppercase tracking-wider">Responsive</p>
            <p className="text-2xl font-black mt-2">All devices</p>
          </div>
        </div>

        {/* Daily Challenge - Box Mghlo9 b bouton Sfer kay3me9 */}
        <div className="bg-indigo-800 p-8 rounded-2xl shadow-xl border-4 border-indigo-950 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-black text-white">Daily Challenge </h2>
            <p className="text-indigo-200 mt-2 text-xl font-medium">Jump into a quick round and beat your best score.</p>
          </div>
          <button
            onClick={() => onStart(difficulties.find((item) => item.value === "easy") || difficulties[0])}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 px-10 rounded-xl text-xl border-4 border-yellow-600 transition-colors shadow-xl"
          >
            QUICK START
          </button>
        </div>

        {/* L'Difficulties - Da2iriyin, byed m3a zre9 wadh */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-4 border-gray-900">
          <h2 className="text-3xl font-black text-center mb-10 text-gray-900">SELECT DIFFICULTY</h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.value}
                onClick={() => onStart(difficulty)}
                className="group flex flex-col items-center justify-center w-36 h-36 md:w-44 md:h-44 bg-gray-300 border-[6px] border-blue-600 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
              >
                <div className="text-5xl mb-2">{difficulty.icon}</div>
                <p className="text-sm md:text-base font-black text-gray-900 group-hover:text-white text-center px-2 uppercase tracking-wide">
                  {difficulty.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* L'Historique (Recent Activity) - Wadh b lk7el wel byed */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-gray-900 mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-8">RECENT ACTIVITY</h2>
          
          {history.length === 0 ? (
            <p className="bg-gray-200 text-gray-800 p-6 rounded-xl border-4 border-gray-400 text-center font-black text-xl">
              No recent games yet. Start your first quiz
            </p>
          ) : (
            <ul className="space-y-4">
              {history.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-5 rounded-xl border-4 border-gray-300 hover:border-gray-500 transition-colors">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p className="font-black text-2xl text-gray-900 uppercase">{item.difficulty || item.category}</p>
                    <p className="text-base font-bold text-gray-500 mt-1">{item.playedAt}</p>
                  </div>
                  <div className="bg-green-600 text-white font-black py-3 px-6 rounded-xl border-4 border-green-800 text-2xl shadow-md">
                    Score: {item.score}/{item.total}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}