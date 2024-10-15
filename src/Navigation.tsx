import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PlusCircle, User } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Initiatives' },
    { path: '/create', icon: PlusCircle, label: 'Create' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="bg-white shadow-lg rounded-t-xl">
      <ul className="flex justify-around py-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};