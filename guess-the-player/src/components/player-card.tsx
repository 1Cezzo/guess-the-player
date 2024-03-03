// PlayerCard.tsx
import React from 'react';
import Image from 'next/image';

interface PlayerCardProps {
  player: {
    name: string;
    age: number;
    nationality: string;
    team_name: string;
    player_image: string;
    team_logo: string;
  };
}

class PlayerCard extends React.Component<PlayerCardProps> {
  render() {
    const { player } = this.props;
    return (
      <div className="bg-green-200 hover:bg-green-400 border-2 border-slate-300 hover:border-indigo-300 shadow-md rounded-lg p-3 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="w-12 h-12 border border-black">
            <Image src={player.player_image} alt={player.name} width={52} height={52} />
          </div>
          <p className="text-lg font-bold">{player.name}</p>
          <div className="w-12 h-12">
            <Image src={player.team_logo} alt={player.team_name} width={52} height={52} />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
