import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Quiz App!</h1>
      <p>
        Test your knowledge and have fun! Challenge yourself with different
        topics and score as high as you can.
      </p>
      <button className="start-quiz-btn" onClick={handleStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
