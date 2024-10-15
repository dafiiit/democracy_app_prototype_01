import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface Initiative {
  id: number;
  title: string;
  description: string;
  votes: {
    support: number;
    oppose: number;
  };
}

export const ViewInitiatives: React.FC = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);

  useEffect(() => {
    const storedInitiatives = localStorage.getItem('initiatives');
    if (storedInitiatives) {
      setInitiatives(JSON.parse(storedInitiatives));
    }
  }, []);

  const handleVote = (id: number, voteType: 'support' | 'oppose') => {
    setInitiatives(prevInitiatives =>
      prevInitiatives.map(initiative =>
        initiative.id === id
          ? {
              ...initiative,
              votes: {
                ...initiative.votes,
                [voteType]: initiative.votes[voteType] + 1
              }
            }
          : initiative
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-800 mb-6">Current Initiatives</h2>
      {initiatives.map((initiative) => (
        <div key={initiative.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{initiative.title}</h3>
          <p className="text-gray-600 mb-4">{initiative.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => handleVote(initiative.id, 'support')}
                className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full hover:bg-green-200 transition-colors duration-200"
              >
                <ThumbsUp size={18} />
                <span>{initiative.votes.support}</span>
              </button>
              <button
                onClick={() => handleVote(initiative.id, 'oppose')}
                className="flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full hover:bg-red-200 transition-colors duration-200"
              >
                <ThumbsDown size={18} />
                <span>{initiative.votes.oppose}</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Total votes: {initiative.votes.support + initiative.votes.oppose}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};