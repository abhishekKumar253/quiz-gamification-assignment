import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";
import NotFound from "./pages/NotFound"; 

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizQuestion setScore={setScore} />} />
      <Route
        path="/result"
        element={<QuizResult score={score} totalQuestions={10} />}
      />
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
};

export default App;
