import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { QuizProvider } from './context/QuizContext' // 👈 Zid hadi

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <QuizProvider> {/* 👈 Wrap l-App hna */}
        <App />
      </QuizProvider>
    </ThemeProvider>
  </React.StrictMode>,
)