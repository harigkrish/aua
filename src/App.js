import React, { Suspense, useEffect } from "react";
import classNames from "classnames";
import { useRoutes } from "react-router-dom";
import ThemeRoutes, { NonAuthRoutes } from "./routes/Router";
import { useTheme } from "./utilities/contexts/ThemeContext";

import { useAuth } from "./utilities/contexts/AuthContext";
import { authVerify } from "./utilities/helpers/auth.helper";
import Loader from "./layouts/loader/Loader";
import { spinnerColor } from "./utilities/configs/spinner.config";
function App() {
  const clearCacheData = () => {
    caches?.keys?.()?.then((names) => {
      names.forEach((name) => {
        caches?.delete(name);
      });
    });
    // alert('Complete Cache Cleared')
  };
  const { user, token, logout, isLoading, setLoader } = useAuth();
  const { theme } = useTheme();
  const routing = useRoutes(ThemeRoutes);
  const nonAuthRoutes = useRoutes(NonAuthRoutes);
  useEffect(() => {
    if (isLoading) console.log("isLoading", isLoading, typeof isLoading);
    // if (user) authVerify(token, logout, isLoading ? 60000 : 1000);
    if (isLoading)
      setTimeout(
        () => {
          setLoader(false);
        },
        token ? 1000 : 10000
      );
    // clearCacheData();
  });
  return (
    <div
      className={classNames(
        "h-screen w-screen p-0 b-0 m-0 flex justify-center items-center",
        { light: theme }
      )}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-full">
          <Suspense fallback={<Loader color={spinnerColor.calm} />}>
            {!!user ? routing : nonAuthRoutes}
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default App;
