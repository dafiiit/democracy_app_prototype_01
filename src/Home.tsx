import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to mApp</h1>
      <p className="mb-4">Empowering social, creative, and productive potential.</p>
      <div className="space-x-4">
        <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create Initiative</Link>
        <Link to="/view" className="bg-green-500 text-white px-4 py-2 rounded">View Initiatives</Link>
      </div>
    </div>
  );
};