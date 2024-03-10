import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import countryToCountryCode from '@/lib/country-codes'; // Import the country code mapping
import { ArrowUp, ArrowDown } from 'feather-icons-react';

const PlayerTableRow = ({ player, correctPlayer }) => {
  // Get the country code from the player's nationality
  const countryCode = countryToCountryCode[player.nationality];

  const [animateAge, setAnimateAge] = useState(false);
  const [animateHeight, setAnimateHeight] = useState(false);
  const [animatePosition, setAnimatePosition] = useState(false);
  const [animateNationality, setAnimateNationality] = useState(false);
  const [animateClub, setAnimateClub] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimateAge(true), 1000),
      setTimeout(() => setAnimateHeight(true), 1500),
      setTimeout(() => setAnimatePosition(true), 2000),
      setTimeout(() => setAnimateNationality(true), 2500),
      setTimeout(() => setAnimateClub(true), 3000)
    ];

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const backgroundColorAge = animateAge ? (
    player.age === correctPlayer.age ? 'bg-green-500' : 
    player.age > correctPlayer.age ? 'bg-red-500 arrow' : 'bg-red-500 arrow'
  ) : 'bg-white';
  const backgroundColorHeight = animateHeight ? (
    player.height === correctPlayer.height ? 'bg-green-500' : 
    player.height > correctPlayer.height ? 'bg-red-500 arrow' : 'bg-red-500 arrow'
  ) : 'bg-white';
  const backgroundColorPosition = animatePosition ? (
    player.position === correctPlayer.position ? 'bg-green-500' : 'bg-red-500'
  ) : 'bg-white';
  const backgroundColorNationality = animateNationality ? (player.nationality === correctPlayer.nationality ? 'bg-green-500' : 'bg-red-500') : 'bg-white';
  const backgroundColorClub = animateClub ? (player.team_name === correctPlayer.team_name ? 'bg-green-500' : 'bg-red-500') : 'bg-white';

  return (
    <tr key={player.id}>
      <td className={`border border-black text-center relative`} style={{ cursor: 'pointer' }}>
        <div className="relative">
          <div className="w-[70px] h-[70px] flex items-center justify-center">
            <Image src={player.player_image} alt={player.name} width={65} height={65} className='table-row-face' />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white text-sm text-center opacity-0 hover:opacity-100 transition-opacity duration-300 break-keep">
            {player.name}
          </div>
        </div>
      </td>
      <td className={`border border-black ${backgroundColorAge} w-[70px] h-[70px] p-0 text-center relative`}>
        <div className="relative">
          <span className="text-white text-xl">{player.age}</span>
          {player.age !== correctPlayer.age && (
            <div className="absolute inset-0 flex justify-center items-center">
              {player.age > correctPlayer.age ? <ArrowDown size={150} className='opacity-50' /> : <ArrowUp size={150} className='opacity-50' />}
            </div>
          )}
        </div>
      </td>
      <td className={`border border-black ${backgroundColorHeight} w-[70px] h-[70px] p-0 text-center relative`}>
        <div className="relative">
          <span className="text-white text-xl">{player.height}</span>
          {player.height !== correctPlayer.height && (
            <div className="absolute inset-0 flex justify-center items-center">
              {player.height > correctPlayer.height ? <ArrowDown size={150} className='opacity-50' /> : <ArrowUp size={150} className='opacity-50' />}
            </div>
          )}
        </div>
      </td>
      <td className={`border border-black ${backgroundColorPosition} w-[100px] h-[70px] p-0 text-center`}>
        <div className="flex justify-center">
          <div className="w-[100px] h-[70px] flex items-center justify-center">
            <span className="text-white text-l">{player.position}</span>
          </div>
        </div>
      </td>
      <td className={`border border-black ${backgroundColorNationality} w-[65px] h-[65px] p-0 text-center`}>
        <div className="flex justify-center">
          <div className="w-[65px] h-[65px] flex items-center justify-center">
            <Image src={`https://flagcdn.com/h60/${countryCode}.png`} alt={player.nationality} width={65} height={65} className='border border-black'/>
          </div>
        </div>
      </td>
      <td className={`border border-black ${backgroundColorClub} w-[70px] h-[70px] p-0 text-center`}>
        <div className="flex justify-center">
          <div className="w-[65px] h-[65px] flex items-center justify-center">
            <Image src={player.team_logo} alt={player.team_name} width={65} height={65} className='table-row-logo'/>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default PlayerTableRow;
