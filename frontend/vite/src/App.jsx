import { useState, useEffect } from "react";
import "./index.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import { authAPI, tokenManager } from "./services/api";

export default function App() {
  const [view, setView] = useState("login"); // login | signup | dashboard
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (tokenManager.hasToken()) {
        try {
          const user = await authAPI.getProfile();
          setCurrentUser(user);
          setView("dashboard");
        } catch (error) {
          console.error("Auth check failed:", error);
          tokenManager.removeToken();
          setView("login");
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = async () => {
    try {
      const user = await authAPI.getProfile();
      setCurrentUser(user);
      setView("dashboard");
    } catch (error) {
      console.error("Failed to fetch profile after login:", error);
      alert("Login successful but failed to load profile. Please try again.");
    }
  };

  const handleSignupSuccess = async () => {
    try {
      const user = await authAPI.getProfile();
      setCurrentUser(user);
      setView("dashboard");
    } catch (error) {
      console.error("Failed to fetch profile after signup:", error);
      alert("Account created but failed to load profile. Please try logging in.");
    }
  };

  const handleLogout = () => {
    tokenManager.removeToken();
    setCurrentUser(null);
    setView("login");
  };

  const switchToSignup = () => {
    setView("signup");
  };

  const switchToLogin = () => {
    setView("login");
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FED0BB 0%, #FCB9B2 100%)',
      }}>
        <div style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.5rem',
          color: '#461220',
        }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      {view === "dashboard" && currentUser ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <div className="auth-container">
          <div className="auth-left-panel"></div>
          <div className="confetti-background"></div>
          <div className="auth-card">
            {view === "login" ? (
              <Login 
                onLoginSuccess={handleLoginSuccess}
                onSwitchToSignup={switchToSignup}
              />
            ) : (
              <Signup 
                onSignupSuccess={handleSignupSuccess}
                onSwitchToLogin={switchToLogin}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
