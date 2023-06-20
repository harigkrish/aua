import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utilities/contexts/AuthContext";
import Loader from "./layouts/loader/Loader";
import { spinnerColor } from "./utilities/configs/spinner.config";
import { ThemeProvider } from "./utilities/contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Suspense fallback={<Loader color={spinnerColor.primary} />}>
            <App />
          </Suspense>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
