import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../localstorage/useLocalStorage";
import { parseJwt } from "../helpers/auth.helper";

const AuthContext = createContext({
  user: null,
  token: null,
  isLoading: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [isLoading, setLoading] = useLocalStorage("loading", false);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    // setUser(parseJwt(data.token)?.user);
    setUser(data.user);
    console.log("user:", data.user);
    setToken(data.token);
    setLoader(false);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    setLoader(false);
    setToken(null);
    navigate("/signin", { replace: true });
  };

  const setLoader = (isLoading) => {
    setLoading(isLoading);
  };

  // console.log(user,"AuthProvider");
  const value = {
    user,
    token,
    isLoading,
    login: login,
    logout: logout,
    setLoader,
    // eslint-disable-next-line
  };
  useEffect(() => {
    console.log("Login Tocken...", token);
  }, [token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
