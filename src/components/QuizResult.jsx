import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import "../styles/QuizResult.css";

const QuizResult = ({ score, totalQuestions }) => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRestartQuiz = () => {
    navigate("/");
  };

  return (
    <div className="quiz-result-container">
      {/* Confetti effect */}
      <Confetti width={windowWidth} height={windowHeight} />
      <h1>Quiz Completed!</h1>
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
      <button onClick={handleRestartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default QuizResult;
