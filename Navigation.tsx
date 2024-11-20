import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { Video } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Video className="w-8 h-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">GIF Master</span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <NavLink to="/" current={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/pricing" current={location.pathname === "/pricing"}>
              Pricing
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" current={location.pathname === "/dashboard"}>
                  Dashboard
                </NavLink>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, current, children }: { to: string; current: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`${
        current
          ? "text-indigo-600 border-b-2 border-indigo-600"
          : "text-gray-600 hover:text-gray-900"
      } transition py-2`}
    >
      {children}
    </Link>
  );
}