// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";

function App() {

  const [entries, setEntries] = useState ([])

  function quickPass(entry){

  let newPasses = [entry, ...entries];

  setEntries(newPasses);
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
          />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<PrivateRoute><SearchPage SearchPageProperty={quickPass}/></PrivateRoute>} />
        <Route path="/video" element={<PrivateRoute><VideoPage parentEntries={entries}/></PrivateRoute>} />
      </Routes>
        <Footer />
          
    </div>
  );
}

export default App;
