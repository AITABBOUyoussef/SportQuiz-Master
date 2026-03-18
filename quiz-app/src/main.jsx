import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { QuizProvider } from './context/QuizContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // 7iydna <React.StrictMode> men hna bach l-API ma-t-t-lancer-ch 2 marrat
  <ThemeProvider>
    <QuizProvider>
      <App />
    </QuizProvider>
  </ThemeProvider>
);