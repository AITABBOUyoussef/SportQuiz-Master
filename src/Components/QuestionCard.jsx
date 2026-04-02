export default function QuestionCard({
  question,
  selected,
  onSelect,
  disabled,
  hiddenOptions,
}) {
  const resolveState = (option) => {
    // L'asass dyal design d l'bouton
    const baseClasses = "w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 font-semibold text-lg flex items-center";

    if (!selected) {
      return `${baseClasses} border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm`;
    }

    if (option === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-500 text-white shadow-md transform scale-[1.02]`;
    }

    if (option === selected && option !== question.correctAnswer) {
      return `${baseClasses} border-red-500 bg-red-500 text-white shadow-md transform scale-[1.02]`;
    }

    return `${baseClasses} border-gray-200 bg-gray-100 text-gray-400 opacity-60`;
  };

  return (
    <div className="bg-white rounded-[24px] shadow-xl w-full p-6 md:p-10 mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 text-center leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => {
          if (hiddenOptions.includes(option)) {
            return null;
          }

          // L'7erf A, B, C, D
          const letter = String.fromCharCode(65 + index);
          const isCorrect = selected && option === question.correctAnswer;
          const isWrong = selected && option === selected && option !== question.correctAnswer;
          const badgeColor = isCorrect || isWrong ? 'border-white text-white' : 'border-gray-300 text-gray-500';

          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              disabled={Boolean(selected) || disabled}
              aria-label={`Answer option ${option}`}
              className={`${resolveState(option)} ${selected ? "cursor-not-allowed" : ""}`}
            >
              <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4 ${!selected ? 'border-gray-300 text-gray-500' : badgeColor}`}>
                {letter}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////










// // 1. Hna kan-déclariw l'composant dyalna (QuestionCard) w kan-exportiweh bach n9dro nkhdmo bih f blays khrin (bhal QuizScreen).
// // L'composant ki-ched des "Props" (ma3lomat jaya mn lfo9), li homa: question, selected, onSelect, disabled, hiddenOptions.
// export default function QuestionCard({
//   question,       // L'objet li fih so2al w les choix w l'jwab s7i7
//   selected,       // L'jwab li khtar l'user dba (ila ba9i makhtar walo katkon khawya "")
//   onSelect,       // L'fonction li kat-exécuta mli l'user ky-klicki 3la chi jwab
//   disabled,       // Booleen (true/false) kigoul wach n-blokiw l'boutonat wla la
//   hiddenOptions,  // Tableau fih les choix li khasshom yghbro (dyal l'mossa3ada 50/50)
// }) {


//   // 2. Hadi fonction dakhliya smitha 'resolveState'.
//   // L'hadaf dyalha: T3ti l'classes dyal Tailwind (les couleurs) l kol bouton 3la 7sab l'jwab.
//   const resolveState = (option) => {
    
//     // Hada howa style l'asasi li kayn f ga3 l'boutonat (padding, border, text...)
//     const baseClasses = "w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 font-semibold text-lg flex items-center";

//     // 7ala 1: Ila l'user ba9i ma-jawbch 3la so2al (!selected)
//     // Kan-red l'bouton byda, w mli kidoz 3liha bl'souris katwli zr9a mftou7a
//     if (!selected) {
//       return `${baseClasses} border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm`;
//     }

//     // 7ala 2: Ila l'user jawb, w had l'option li kan-verifiw dba hiya "l'jwab s7i7"
//     // Kan-lwnouha b l'Khder bach tban hiya s7i7a
//     if (option === question.correctAnswer) {
//       return `${baseClasses} border-green-500 bg-green-500 text-white shadow-md transform scale-[1.02]`;
//     }

//     // 7ala 3: Ila l'user khtar had l'option (option === selected), walakin tl3at ghalta (option !== correctAnswer)
//     // Kan-lwnouha b l'7mer
//     if (option === selected && option !== question.correctAnswer) {
//       return `${baseClasses} border-red-500 bg-red-500 text-white shadow-md transform scale-[1.02]`;
//     }

//     // 7ala 4: Les options lokhrin li b9aw (li ghaltin w makhtarhomch l'user)
//     // Kan-rodhom Gris w kan-tfi fihom dow (opacity-60) bach mayb9awch mbyennin
//     return `${baseClasses} border-gray-200 bg-gray-100 text-gray-400 opacity-60`;
//   };


//   // 3. Hna kiybda l'HTML (JSX) li ghadi yban f l'écran dyal l'user
//   return (
//     // L'Cadre kbir li haz so2al (khelfinah byda, zedna chwiya dyal del w rounded)
//     <div className="bg-white rounded-[24px] shadow-xl w-full p-6 md:p-10 mb-6">
      
//       {/* 4. Hna kan-affichiw so2al (Question) */}
//       <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 text-center leading-relaxed">
//         {question.question}
//       </h2>

//       {/* 5. L'Blassa li hazza les choix (A, B, C, D) */}
//       <div className="space-y-4">
        
//         {/* Kan-doro (map) 3la les choix kamlin li kaynin f had so2al */}
//         {question.options.map((option, index) => {
          
//           // L'Mossa3ada 50/50: Ila kant had l'option jdida kayna f tableau dyal l'mkhbyin,
//           // makan-rsmouhach f l'écran (return null)
//           if (hiddenOptions.includes(option)) {
//             return null;
//           }

//           // Kan-génériw l'7rof (A, B, C, D) dynamiquement b l'code ASCII. 
//           // index 0 hwa 'A', index 1 hwa 'B'...
//           const letter = String.fromCharCode(65 + index);
          
//           // Kan-chofo wach had l'option hiya s7i7a wla ghalta bach n-gadiw loun dyal da2ira dyal l'7erf
//           const isCorrect = selected && option === question.correctAnswer;
//           const isWrong = selected && option === selected && option !== question.correctAnswer;
//           const badgeColor = isCorrect || isWrong ? 'border-white text-white' : 'border-gray-300 text-gray-500';

//           // 6. L'Bouton dyal kol choix
//           return (
//             <button
//               key={option} // React khtaj un clé unique (key) l kol élément f la boucle
              
//               // Mli ky-klicki l'user, kan-sifto l'option li khtar l l'fonction onSelect
//               onClick={() => onSelect(option)}
              
//               // Kan-blokiw (disable) l'bouton ila l'user deja jawb (Boolean(selected)) awla l'we9t sala (disabled)
//               disabled={Boolean(selected) || disabled}
              
//               // L'Class dyal css, kan-jibouha mn l'fonction resolveState li drna lfo9
//               // W kan-zido "cursor-not-allowed" ila deja jawb bach tban l'souris mblokiya
//               className={`${resolveState(option)} ${selected ? "cursor-not-allowed" : ""}`}
//             >
              
//               {/* Da2ira sghira li fiha l'7erf (A, B, C, D) */}
//               <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4 ${!selected ? 'border-gray-300 text-gray-500' : badgeColor}`}>
//                 {letter}
//               </span>
              
//               {/* L'kettba dyal l'jwab nfsso (ex: Real Madrid, Messi...) */}
//               <span>{option}</span>

//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }