const BASE_URL = "https://opentdb.com/api.php";

export const fetchQuestions = async (amount = 10, difficulty = "medium") => {
  try {
    const response = await fetch(`${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=multiple`);
    
    if (!response.ok) throw new Error("Mouchkil f l-connexion m3a l-API");

    const data = await response.json();
    
    if (data.response_code !== 0) throw new Error("API ma-rej3atch l-as'ila s7a7");

    // US4: Shuffling logic hna bach l-ajwiba y-jiw m-khelteeen
    return data.results.map((q) => {
      const allAnswers = [...q.incorrect_answers, q.correct_answer];
      return {
        ...q,
        shuffledAnswers: allAnswers.sort(() => Math.random() - 0.5),
      };
    });
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error;
  }
};