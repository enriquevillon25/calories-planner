import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { AuthPage } from "./pages/Auth/AuthPage";
import { AuthProvider } from "./context/AuthContext";
import { ValidateRouteAuth } from "./auth/ValidateRouteAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ValidateRouteAuth>
                <HomePage />
              </ValidateRouteAuth>
            }
          />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
