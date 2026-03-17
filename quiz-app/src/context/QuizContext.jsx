import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "idle", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start": return { ...state, status: "active" };
    case "restart": return { ...initialState, status: "ready" };
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