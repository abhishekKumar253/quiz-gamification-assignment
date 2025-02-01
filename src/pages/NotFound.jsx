// pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default NotFound;
