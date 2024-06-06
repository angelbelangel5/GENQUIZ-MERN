import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statement
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import AuthState from './context/AuthState';

function App() {
  return (
    <AuthState>
      <Router>
        <Routes> {/* Updated from Switch to Routes */}
          <Route path="/login" element={<LoginPage />} /> {/* Updated Route syntax */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/student" element={<StudentPage />} />
        </Routes> {/* Updated closing tag */}
      </Router>
    </AuthState>
  );
}

export default App;
