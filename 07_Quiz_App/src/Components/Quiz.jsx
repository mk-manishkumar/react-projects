import React, { useState } from "react";
import "./Quiz.css";
import QuestionList from "./QuestionList";

const Quiz = () => {
  const questions = [
    {
      question: "What is React?",
      options: ["CSS Framework", "JavaScript Library", "JavaScript Framework", "Testing Tool"],
      answer: "JavaScript Library",
    },
    {
      question: "Who created JavaScript?",
      options: ["Dennis Ritchie", "Edsger Dijkstra", "Brendan Eich", "Guido van Rossum"],
      answer: "Brendan Eich",
    },
    {
      question: "What is the process of finding errors and fixing them within a program?",
      options: ["Compiling", "Executing", "Debugging", "Linking"],
      answer: "Debugging",
    },
    {
      question: "A loop that never ends is referred to as a(n)?",
      options: ["Infinite Loop", "For Loop", "Recursive Loop", "Do While Loop"],
      answer: "Infinite Loop",
    },
    {
      question: "Which of them is not a CSS Framework?",
      options: ["Bootstrap", "Tailwind", "Materialize", "Angular"],
      answer: "Angular",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <QuestionList question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
          <button disabled={currentAnswer === null} className={currentAnswer === null ? "button-disable" : "button"} onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p className="result">
            Your Score : {score}/{questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
