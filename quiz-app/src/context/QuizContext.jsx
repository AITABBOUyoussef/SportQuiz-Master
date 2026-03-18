import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "idle", // status: idle, loading, error, ready, active, finished
  index: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": return { ...state, status: "loading" };
    case "dataReceived": return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed": return { ...state, status: "error" };
    case "start": return { ...state, status: "active" };
    case "newAnswer": return { ...state, answer: action.payload };
    case "nextQuestion": return { ...state, index: state.index + 1, answer: null };
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