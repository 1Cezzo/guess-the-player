'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from '@/components/player-card'; // Import PlayerCard component

const PremierLeaguePage: React.FC = () => {
  const [players, setPlayers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const API_BASE_URL = 'https://luigi-backend-7f709e978d15.herokuapp.com';

  const endpointUrl = `${API_BASE_URL}/players/`;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(endpointUrl);
        console.log('Players:', response.data);
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  // Filter players based on search query
  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render list of player cards only if search query has at least two characters
  const renderPlayerCards = searchQuery.length > 2 ? (
    <div className="max-h-52 w-[350px] overflow-y-auto">
      {/* Render filtered players as cards */}
      {filteredPlayers.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  ) : null;

  return (
    <div className="flex flex-col h-screen items-center mt-auto" style={{ marginTop: '15vh' }}>
      <div className="bg-green-200 shadow-md rounded-lg p-4 w-[350px] mb-4">
        <p className="text-lg font-bold">Guess the player of the day!</p>
        <p className="text-gray-600">Type the name of any football player</p>
      </div>
      <input
        type="text"
        className="bg-green-200 border border-gray-400 p-2 shadow-md rounded-md w-[350px] mb-4"
        placeholder="Enter player's name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
      />
      <div>
        <h2 className="text-xl font-bold mb-2">Players:</h2>
        {/* Conditionally render list of player cards */}
        {renderPlayerCards}
      </div>
    </div>
  );
};

export default PremierLeaguePage;
