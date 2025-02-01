import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizData } from "../api/quizApi";
import "../styles/QuizQuestion.css";

const QuizQuestion = ({ setScore }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const navigate = useNavigate();

  // Fetch quiz data from the API
  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        // Ensure the API returns the correct format
        if (data && Array.isArray(data.questions)) {
          setQuizData(data.questions);
        } else {
          console.error("Invalid quiz data format", data);
        }
      } catch (error) {
        console.error("Failed to load quiz data:", error);
      }
    };
    loadQuizData();
  }, []);

  // Countdown timer for each question
  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer when component unmounts
  }, [timeLeft]);

  // Handle when an answer is clicked
  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      const isCorrect = answer === quizData[currentQuestion]?.correctAnswer;
      if (isCorrect) {
        setScore((prev) => prev + 1); // Increment score if the answer is correct
      }
      setSelectedAnswer(answer); // Mark the answer as selected
    }
  };

  // Proceed to the next question or show results
  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
    } else {
      navigate("/result"); // Navigate to the results page
    }
  };

  // Render loading message while quiz data is being fetched
  if (quizData.length === 0) return <div>Loading quiz data...</div>;

  const current = quizData[currentQuestion];

  return (
    <div className="quiz-question-container">
      <h2>{current?.question}</h2>

      <div className="options">
        {current?.options?.map((option, index) => (
          // Make sure you're rendering the correct property of the object (like option.text or option.description)
          <button
            key={index}
            onClick={() => handleAnswerClick(option.text)} // Assuming 'text' or 'description' is the string value you want to display
            className={
              selectedAnswer === option.text
                ? option.text === current.correctAnswer
                  ? "correct"
                  : "incorrect"
                : ""
            }
            disabled={selectedAnswer !== null} // Disable the options once an answer is selected
          >
            {option.text} {/* Display the option text */}
          </button>
        ))}
      </div>

      <p>Time Left: {timeLeft} seconds</p>

      {selectedAnswer && (
        <button onClick={handleNextQuestion} className="next-button">
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizQuestion;
