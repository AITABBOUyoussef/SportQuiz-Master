import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "idle", 
  index: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": return { ...state, status: "loading" };
    case "dataReceived": return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed": return { ...state, status: "error" };
    case "start": return { ...state, status: "active", index: 0, score: 0, answer: null };
    case "newAnswer":
      // Check wach l-jawwab s7i7 bach n-zidou 10 noqat
      const isCorrect = action.payload === state.questions[state.index].correct_answer;
      return { 
        ...state, 
        answer: action.payload, 
        score: isCorrect ? state.score + 10 : state.score 
      };
    case "nextQuestion": return { ...state, index: state.index + 1, answer: null };
    case "finished": return { ...state, status: "finished" };
    case "restart": return { ...initialState, questions: state.questions, status: "ready" };
    default: return state;
  }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);