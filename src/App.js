import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>something</p>
        <NavBar />
        <Routes>
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
