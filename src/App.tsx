import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { usePlanner } from "./hooks/usePlanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { HeaderComponent } from "./components/Header/HeaderComponent";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
