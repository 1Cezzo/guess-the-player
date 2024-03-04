'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from '@/components/player-card'; // Import PlayerCard component
import { Separator } from "@/components/ui/separator"
import PlayerTableRow from '@/components/player-table-row';

const PremierLeaguePage: React.FC = () => {
  const [players, setPlayers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([]); // State for selected players
  const [correctPlayer, setCorrectPlayer] = useState<any | null>(null);
  const API_BASE_URL = 'https://luigi-backend-7f709e978d15.herokuapp.com';

  const endpointUrl = `${API_BASE_URL}/players/`;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(endpointUrl);
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

  // Handle click event for selecting a player
  const handlePlayerClick = (player: any) => {
    setSelectedPlayers(prevSelectedPlayers => [...prevSelectedPlayers, player]);
    setSearchQuery(''); 
  };

  const renderPlayerCards = searchQuery.length > 2 ? (
    <div className="max-h-52 w-[350px] overflow-y-auto">
      {filteredPlayers.length === 0 ? (
        <p>No player found</p>
      ) : (
        filteredPlayers
          .filter(player => !selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id)) // Filter out selected players
          .map(player => (
            <PlayerCard key={player.id} player={player} onClick={() => handlePlayerClick(player)} />
          ))
      )}
    </div>
  ) : null;

  const selectCorrectPlayer = () => {
    const randomIndex = Math.floor(Math.random() * 438); // 438 is the total number of players
    const randomPlayer = players[randomIndex];
    setCorrectPlayer(randomPlayer);
  };
  
  useEffect(() => {
    if (players.length > 0) {
      if (!correctPlayer) {
        selectCorrectPlayer();
      }
  
      const interval = setInterval(() => {
        selectCorrectPlayer();
      }, 24 * 60 * 60 * 1000);
  
      return () => clearInterval(interval);
    }
  }, [players]);
  
  
  // Use another useEffect to log the correctPlayer after it has been set
  useEffect(() => {
    console.log('Correct player:', correctPlayer);
  }, [correctPlayer]);
  

  return (
    <div className="flex flex-col h-screen items-center mt-auto" style={{ marginTop: '15vh' }}>
      <div className="bg-green-200 shadow-md rounded-lg p-4 w-[350px] mb-4">
        <p className="text-3xl font-bold mb-2">Guess the player of the day!</p>
        <p className="text-gray-600">Type the name of any football player</p>
      </div>
      <input
        type="text"
        className="bg-green-200 border border-gray-400 p-2 shadow-md rounded-md w-[350px]"
        placeholder="Enter player's name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
      />
      <div>
        {/* Conditionally render list of player cards */}
        {renderPlayerCards}
      </div>
      <div className="mt-12">
        {/* Render list of selected players */}
        <table className="table-auto border-spacing-5">
          <thead>
          <tr>
            <th className="w-[65px] text-xl">Player</th>
            <th className="w-[65px] text-xl">Age</th>
            <th className="w-[65px] text-xl">Nationality</th>
            <th className="w-[65px] text-xl">Team</th>
          </tr>
          <tr>
            <td><Separator className="separator" /></td>
            <td><Separator className="separator" /></td>
            <td><Separator className="separator" /></td>
            <td><Separator className="separator" /></td>
          </tr>
          </thead>
          <tbody>
            <div className='mt-2'></div>
            {selectedPlayers.map(player => (
              <PlayerTableRow key={player.id} player={player} correctPlayer={correctPlayer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PremierLeaguePage;
