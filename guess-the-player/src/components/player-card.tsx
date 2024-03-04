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
  onClick: () => void;
}

class PlayerCard extends React.Component<PlayerCardProps> {
  render() {
    const { player, onClick } = this.props;
    return (
      <div className="hover:bg-slate-100 border-2 border-slate-300 hover:border-indigo-300 shadow hover:shadow-lg rounded-lg p-3 flex flex-col" onClick={onClick}>
        <div className="flex justify-between items-center">
          <div className="w-14 h-14 border border-black">
            <Image src={player.player_image} alt={player.name} width={52} height={52} className='player-card-image'/>
          </div>
          <p className="text-lg font-bold select-none">{player.name}</p>
          <div className="w-14 h-14">
            <Image src={player.team_logo} alt={player.team_name} width={52} height={52} className='player-card-image' />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
