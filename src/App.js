import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';
import Register from "./pages/Register";

function App() {
  // đang cấu hinh router
  const router = createBrowserRouter([{ path: "", element: "" }]);
  return (
    // <Register />
    // <Login />
    <HomePage />
  );
}

export default App;
