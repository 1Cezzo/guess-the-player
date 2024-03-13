import React from 'react';
import PlayerTableRow from '@/components/player-table-row';
import { Separator } from "@/components/ui/separator";

interface SelectedPlayersListProps {
  selectedPlayers: any[];
  correctPlayer: any | null;
}

const SelectedPlayersList: React.FC<SelectedPlayersListProps> = ({ selectedPlayers, correctPlayer }) => {
  return (
    <div className="mt-12">
      <table className="table-auto border-spacing-5">
        <thead>
          <tr>
            <th className="w-[65px] text-xl">Player</th>
            <th className="w-[65px] text-xl">Age</th>
            <th className="w-[65px] text-xl">Height</th>
            <th className="w-[65px] text-xl">Position</th>
            <th className="w-[65px] text-xl">Nationality</th>
            <th className="w-[65px] text-xl">Team</th>
          </tr>
          <tr>
            <td><Separator className="separator" /></td>
            <td><Separator className="separator" /></td>
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
  );
};

export default SelectedPlayersList;
