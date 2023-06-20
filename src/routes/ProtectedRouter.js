import { Navigate } from "react-router-dom";
import { useAuth } from "../utilities/contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  // console.log(user);

  if (!user) {
    console.log(user);
    // user is not authenticated
    return <Navigate to="/signin" />;
  }
  return children;
};
