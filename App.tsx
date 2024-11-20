import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Auth } from './pages/Auth';
import { Pricing } from './pages/Pricing';
import { useAuthStore } from './stores/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Auth />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;