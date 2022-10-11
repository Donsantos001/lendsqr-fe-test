import React, { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { QueryClientProvider } from "react-query";
import { queryClient, AppSetup } from "./utils/appSetup";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import ProtectedPage from "./protected/ProtectedPage";
import SharedLayout from "./protected/SharedLayout";
import AppSuspenseSpinner from "./components/Loader/AppSuspenseSpinner";

const ErrorPage = lazy(() => import("./pages/Error/Error"));
const ErrorBoundary = lazy(() => import("./pages/Error/ErrorBoundary"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Login = lazy(() => import("./pages/Login/Login"));
const Users = lazy(() => import("./pages/Users/Users"));
const UserDetails = lazy(() => import("./pages/UserDetails/UserDetails"));

const App = () => {
  useEffect(() => {
    AppSetup();
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedPage>
                  <SharedLayout>
                    <Suspense fallback={<AppSuspenseSpinner />}>
                      <Outlet />
                    </Suspense>
                  </SharedLayout>
                </ProtectedPage>
              }
            >
              {/* A landing page may respond to the index path / */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/details" element={<UserDetails />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
