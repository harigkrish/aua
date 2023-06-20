import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../views/pages/Dashboard.js";
import SignIn from "../views/pages/default/SignIn.js";

import { ProtectedRoute } from "./ProtectedRouter.js";
import BasicVerification from "../views/pages/BasicVerification.js";
import DemographicVerification from "../views/pages/Demographic.js";
import OTP from "../views/pages/OTP.js";
import BiometricVerification from "../views/pages/BiometricVerification.js";
import BFDVerification from "../views/pages/BFDVerification.js";
import IRISVerification from "../views/pages/BFDVerification copy.js";
import Reports from "../views/pages/Reports.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const Task = lazy(() => import("../views/pages/Task.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      //   { path: "/", element: <Navigate to="/starter" /> },
      {
        path: "/",
        exact: true,
        element: <Reports />,
      },
      {
        path: "/dashboard",
        exact: true,
        element: <Reports />,
      },

      {
        path: "/basic-auth",
        exact: true,
        element: (
          <ProtectedRoute>
            <BasicVerification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/demographic",
        exact: true,
        element: (
          <ProtectedRoute>
            <DemographicVerification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/otp",
        exact: true,
        element: (
          <ProtectedRoute>
            <OTP />
          </ProtectedRoute>
        ),
      },
      {
        path: "/biometric",
        exact: true,
        element: (
          <ProtectedRoute>
            <BiometricVerification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bfd",
        exact: true,
        element: (
          <ProtectedRoute>
            <BFDVerification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/iris",
        exact: true,
        element: (
          <ProtectedRoute>
            <IRISVerification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/reports",
        exact: true,
        element: (
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        ),
      },

      { path: "/*", element: <React.Fragment>Not Found</React.Fragment> },
    ],
  },
];

export const NonAuthRoutes = [
  {
    path: "/",
    element: <FullLayout sidebar={false} />,
    children: [
      {
        path: "/",
        exact: true,
        element: <Dashboard />,
      },
	  {
        path: "/home",
        exact: true,
        element: (
          <React.Fragment>
            <Dashboard />
          </React.Fragment>
        ),
      },
	  {
        path: "/services",
        exact: true,
        element: (
          <React.Fragment>
            <Dashboard />
          </React.Fragment>
        ),
      },
	  {
        path: "/dashboard",
        exact: true,
        element: (
          <React.Fragment>
            <Dashboard />
          </React.Fragment>
        ),
      },
	  
      {
        path: "/signin",
        exact: true,
        element: (
          <React.Fragment>
            <SignIn />
          </React.Fragment>
        ),
      },
      { path: "/*", element: <Navigate to="/signin" /> },
    ],
  },
];

export default ThemeRoutes;
