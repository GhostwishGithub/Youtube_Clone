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

function App() {
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
        <Route path="/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
        <Route path="/video" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
      </Routes>
        {/* <div>
          <input type="text" onClick={SearchPage} onChange={(selection)=>console.log(selection.target.value)} className="searchTerm" placeholder="SEARCH"></input>
          <button type='submit' className="searchButton">
          <i className="fa-fa search">search</i>
          </button>
        </div> */}
        <Footer />
    </div>
  );
}

export default App;
