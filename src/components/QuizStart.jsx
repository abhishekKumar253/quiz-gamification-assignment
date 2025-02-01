import { useNavigate } from "react-router-dom";
import "../styles/QuizStart.css";

const QuizStart = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="quiz-start-container">
      <h1 className="quiz-start-header">Welcome to the Quiz!</h1>
      <p className="quiz-start-description">
        Test your knowledge and have fun while learning!
      </p>
      <button
        onClick={handleStartQuiz}
        className="start-button"
        aria-label="Start the quiz"
        tabIndex={0}>
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
