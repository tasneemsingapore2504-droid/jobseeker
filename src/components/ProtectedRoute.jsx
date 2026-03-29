import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      setIsValid(false);
      return;
    }

    try {
      const user = JSON.parse(userData);

      if (user.role === "jobseeker") {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch {
      setIsValid(false);
    }
  }, []);

  if (isValid === null) {
    return <h2>Checking auth...</h2>;
  }

  if (isValid === false) {
    window.location.replace("http://localhost:5173/login");
    return <h2>Redirecting...</h2>;
  }

  return children;
};

export default ProtectedRoute;
