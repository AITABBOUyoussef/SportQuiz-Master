import { useState } from "react";

export default function QuizProgress() {
  const totalQuestions = 10;
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      
     
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span>Question {currentQuestion} / {totalQuestions}</span>
        <span>{Math.round(progress)}%</span>
      </div>

     
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

   
      <button
        onClick={() =>
          setCurrentQuestion((prev) =>
            prev < totalQuestions ? prev + 1 : prev
          )
        }
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Question suivante
      </button>
    </div>
  );
}