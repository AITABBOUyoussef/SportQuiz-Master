import { useMemo, useState } from "react";

const difficulties = [
  { value: "easy", label: "Easy", icon: "E" },
  { value: "medium", label: "Medium", icon: "M" },
  { value: "hard", label: "Hard", icon: "H" },
];

function useQuizLogic() {
  const [screen, setScreen] = useState("home");
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties[0]);
  const [sessionResult, setSessionResult] = useState(null);
  const [history, setHistory] = useState(() => {
    const raw = localStorage.getItem("quiz-history");

    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  });

  const summaryText = useMemo(() => {
    if (!sessionResult) return "";
    return `${sessionResult.score}/${sessionResult.total} in ${sessionResult.difficulty}`;
  }, [sessionResult]);

  const startDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setScreen("quiz");
  };

  const completeQuiz = ({ score, total }) => {
    const item = {
      id: Date.now(),
      difficulty: selectedDifficulty.label,
      score,
      total,
      playedAt: new Date().toLocaleDateString(),
    };

    const nextHistory = [item, ...history].slice(0, 6);
    setHistory(nextHistory);
    localStorage.setItem("quiz-history", JSON.stringify(nextHistory));
    setSessionResult(item);
    setScreen("result");
  };

  return {
    difficulties,
    screen,
    selectedDifficulty,
    sessionResult,
    history,
    summaryText,
    startDifficulty,
    completeQuiz,
    setScreen,
  };
}

export default useQuizLogic;










/////////////////////////////////////////




// // 1. Hna kan-importiw les Hooks li m7tajin mn React.
// // useState: bach n-gériw l'état (data li katbeddel).
// // useMemo: bach n-khbiw chi résultat dyal chi 7ssab bach mayt3awdch y-t7seb kol mara.
// import { useMemo, useState } from "react";

// // 2. Hna kan-déclariw les catégories dyalna f tableau.
// // Kol ryada (wla matière hna) 3ndha id (li ghadi n7tajjouh f l'API), title, subtitle, w icon.
// const categories = [
//   { id: 19, title: "Math", subtitle: "Numbers and logic", icon: "1" },
//   { id: 17, title: "Chemistry", subtitle: "Elements and reactions", icon: "2" },
//   { id: 17, title: "Physics", subtitle: "Matter and motion", icon: "3" },
// ];


// // 3. Hada hwa l'Custom Hook dyalna. Kandiroh b fonction smitha katbda b "use".
// export default function useQuizLogic() {
  
//   // ==========================================
//   // LES ÉTATS (STATES) - L'ma3lomat li kat-tbeddel
//   // ==========================================

//   // screen: Ki-7ded l'page li ghatban l'user ("home", "quiz", wla "result"). Kibda b "home".
//   const [screen, setScreen] = useState("home");
  
//   // selectedCategory: L'catégorie li khtar l'user yl3bha. Katbda par défaut b l'catégorie lwla f tableau.
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
//   // sessionResult: Ki-khbi natija dyal l'quiz (score w total) mli kisali l'user. Kibda khawi (null).
//   const [sessionResult, setSessionResult] = useState(null);

//   // history: Ki-khbi l'historique dyal l'al3ab. Hna khedemna b fonction (Callback) dakhl useState.
//   // L'hadaf d had l'fonction: T9ra mn 'localStorage' mli kat-t7el l'application.
//   const [history, setHistory] = useState(() => {
//     // Kan-jibo l'historique l9dim mn l'navigateur
//     const raw = localStorage.getItem("quiz-history");

//     // Ila mal9ina walo (user jdid wla msa7 l'historique), kan-rddou tableau khawi []
//     if (!raw) {
//       return [];
//     }

//     // Ila l9ina chi 7aja, kan-7awloha mn String (Texte) l Objet JavaScript b 'JSON.parse'
//     try {
//       return JSON.parse(raw);
//     } catch {
//       // Ila w93at chi erreur f l'9raya, kan-rddou tableau khawi bach ma-tplantach l'app
//       return [];
//     }
//   });


//   // ==========================================
//   // LES FONCTIONS D'AFFICHAGE W L'LOGIC
//   // ==========================================

//   // summaryText: Ki-générer jomla dyal l'khilasa (matalan "15/20 in Math").
//   // Khedemna b 'useMemo' bach had l'jomla t-t9ad GHMIR mli l'sessionResult kay-tbeddel.
//   const summaryText = useMemo(() => {
//     // Ila ba9i makaynach natija, rdd text khawi
//     if (!sessionResult) return "";
    
//     // Kan-ls9o l'score w total w smiya dyal l'catégorie f jomla w7da
//     return `${sessionResult.score}/${sessionResult.total} in ${sessionResult.category}`;
//   }, [sessionResult]);


//   // ==========================================
//   // LES ACTIONS - Chno kidir l'user
//   // ==========================================

//   // startCategory: Fonction kat-tdeclencha mli l'user kyklicki 3la chi catégorie f l'Accueil
//   const startCategory = (category) => {
//     // Kat-sjjel l'catégorie li khtar
//     setSelectedCategory(category);
    
//     // Kat-sifto l l'écran dyal l'Quiz ("quiz")
//     setScreen("quiz");
//   };

//   // completeQuiz: Fonction kat-tdeclencha mli kisali l'quiz (jwab 3la so2al lakher wla we9t sala)
//   // Ki-jiha l'score w total f les paramètres
//   const completeQuiz = ({ score, total }) => {
    
//     // Kan-gaddo l'Objet jdid dyal had l'partie li salat dba
//     const item = {
//       id: Date.now(), // Ki-3tina ra9m unique (Id) b lwe9t dyal had l7da
//       category: selectedCategory.title, // Smiyat l'catégorie li l3ab
//       score, // Ch7al jab
//       total, // Ch7al d l'as2ila kano
//       playedAt: new Date().toLocaleDateString(), // Tarikh dyal l'youma
//     };

//     // Kan-zido had l'partie jdida (item) f lwl dyal l'historique l9dim (...history)
//     // W kan-9t3o l'historique bash mayfotch 6 dyal les parties f l'affichge (slice(0, 6))
//     const nextHistory = [item, ...history].slice(0, 6);
    
//     // Kan-mettew à jour l'état (State) f React
//     setHistory(nextHistory);
    
//     // Kan-sauvegardiw l'historique jdid f 'localStorage' dyal l'navigateur bash ib9a mssjjel
//     // Kan-7awloh l String b 'JSON.stringify' 7it localStorage kikqbel ghir texte
//     localStorage.setItem("quiz-history", JSON.stringify(nextHistory));
    
//     // Kan-sejjlo natija d had l'partie f 'sessionResult' bash n-affichiwha f l'écran d Natija
//     setSessionResult({ ...item, category: selectedCategory.title });
    
//     // Kan-sifto l'user l l'écran d'Natija ("result")
//     setScreen("result");
//   };


//   // ==========================================
//   // LE RETOUR (RETURN) - L'hwayj li kan-partagiw
//   // ==========================================

//   // Hna kan-rddou ga3 l'les variables w les fonctions li ghadin n7tajouhom f les pages khrin
//   // Ay 7aja kayna hna t9der tkhdem biha f App.jsx wla HomeScreen...
//   return {
//     screen,             // L'écran l7ali
//     setScreen,          // Fonction bach tbeddel l'écran b yeddik (matalan: retour à l'accueil)
//     selectedCategory,   // L'catégorie khtiyara
//     categories,         // Tableau d'les catégories
//     sessionResult,      // Natija d l'partie
//     history,            // L'historique d l'al3ab
//     summaryText,        // L'jomla dyal l'khilasa
//     startCategory,      // Fonction bach tbda le3ba
//     completeQuiz,       // Fonction bach tsali le3ba w tsjjel natija
//   };
// }