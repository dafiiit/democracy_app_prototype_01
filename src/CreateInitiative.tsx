import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateInitiative: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInitiative = {
      id: Date.now(),
      title,
      description,
      votes: { support: 0, oppose: 0 }
    };

    const storedInitiatives = localStorage.getItem('initiatives');
    const initiatives = storedInitiatives ? JSON.parse(storedInitiatives) : [];
    initiatives.push(newInitiative);
    localStorage.setItem('initiatives', JSON.stringify(initiatives));

    setTitle('');
    setDescription('');
    navigate('/');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-800 mb-6">Create New Initiative</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Create Initiative
        </button>
      </form>
    </div>
  );
};