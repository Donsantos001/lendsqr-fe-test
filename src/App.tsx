import React, { lazy, Suspense } from "react";
import "./App.scss";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./utils/appSetup";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ErrorBoundary from "./pages/Error/ErrorBoundary";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import ProtectedPage from "./protected/ProtectedPage";
import SharedLayout from "./protected/SharedLayout";
import AppSuspenseSpinner from "./components/Loader/AppSuspenseSpinner";

function App() {
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
                    <Suspense fallback={<AppSuspenseSpinner />} />
                    <Outlet />
                  </SharedLayout>
                </ProtectedPage>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user/details" element={<UserDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
