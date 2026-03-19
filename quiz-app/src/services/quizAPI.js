export const fetchQuestions = async () => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=39&category=21");
    if (!response.ok) throw new Error("API Error");
    const data = await response.json();
    
    return data.results.map((q) => {
      const allAnswers = [...q.incorrect_answers, q.correct_answer];
      return {
        ...q,
        shuffledAnswers: allAnswers.sort(() => Math.random() - 0.5),
      };
    });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};