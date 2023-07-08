import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
// import Login from "./pages/test";
import HomePage from './pages/HomePage';
import Register from "./pages/Register";
import Text from "./pages/text";
import MyForm from "./pages/text";

function App() {
  // đang cấu hinh router
  // const router = createBrowserRouter([{ path: "", element: "" }]);
  return (
    // <Register />
    <Login />
    // <HomePage />
    // <MyForm />
  );
}

export default App;
