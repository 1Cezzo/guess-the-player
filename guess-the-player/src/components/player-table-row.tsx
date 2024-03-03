import React from 'react';
import Image from 'next/image';
import countryToCountryCode from '@/lib/country-codes'; // Import the country code mapping

const PlayerTableRow = ({ player }) => {
  // Get the country code from the player's nationality
  const countryCode = countryToCountryCode[player.nationality];

  return (
    <tr key={player.id}>
      <td className="border border-gray-300 text-center">
        <div className="flex justify-center">
          <div className="w-[65px] h-[65px] flex items-center justify-center">
            <Image src={player.player_image} alt={player.name} width={65} height={65} className='table-row-face' />
          </div>
        </div>
      </td>
      <td className="border border-gray-300 w-[65px] h-[65px] p-2 text-center">{player.age}</td>
      <td className="border border-gray-300 w-[65px] h-[65px] p-0 text-center">
        <div className="flex justify-center">
          <div className="w-[65px] h-[65px] flex items-center justify-center">
          <Image src={`https://flagcdn.com/h60/${countryCode}.png`} alt={player.nationality} width={65} height={65} />
          </div>
        </div>
      </td>
      <td className="border border-gray-300 w-[65px] h-[65px] p-0 text-center">
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
