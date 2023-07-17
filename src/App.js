import React from "react";
import "./App.css";
import Login from "./pages/Login";
<<<<<<< HEAD
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
=======
// import HomePage from './pages/HomePage';
import Register from "./pages/Register";
import Home2 from "./pages/HomePage2";

function App() {
  return (
    <> 
    {/* <Register /> */}
    <Home2/>
    </>
   
    
    // <Login />
    // <HomePage />
  
>>>>>>> 39b9ba42dcf66b992a9130cc53899c542c0c0de6
  );
}

export default App;
