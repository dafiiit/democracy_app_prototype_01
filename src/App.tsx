import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateInitiative } from './CreateInitiative';
import { ViewInitiatives } from './ViewInitiatives';
import { UserProfile } from './UserProfile';
import { Navigation } from './Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col">
        <div className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<ViewInitiatives />} />
            <Route path="/create" element={<CreateInitiative />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;