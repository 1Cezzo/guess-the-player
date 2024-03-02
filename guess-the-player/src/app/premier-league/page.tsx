'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PremierLeaguePage: React.FC = () => {
  const [players, setPlayers] = useState<any[]>([]);
  const API_BASE_URL = 'http://localhost:8000';

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

  return (
    <div className="flex flex-col h-screen items-center mt-auto" style={{ marginTop: '15vh' }}>
      <div className="bg-white bg-green-200 shadow-md rounded-lg p-4 w-[350px] mb-4">
        <p className="text-lg font-bold">Guess the player of the day!</p>
        <p className="text-gray-600">Type the name of any football player</p>
      </div>
      <input
        type="text"
        className="border border-gray-400 p-2 shadow-md rounded-md w-[350px] mb-4"
        placeholder="Enter player's name"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">Players:</h2>
        <ul>
          {players.map(player => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PremierLeaguePage;
