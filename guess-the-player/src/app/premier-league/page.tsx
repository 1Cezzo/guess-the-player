import React from 'react';

const PremierLeaguePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen items-center mt-auto" style={{ marginTop: '15vh' }}>
      <div className="bg-green-200 border border-gray-400 p-5 rounded shadow-md rounded-lg w-[350px]">
        <p className="text-lg font-bold">Guess the player of the day!</p>
        <p className="text-gray-600">Type the name of any football player</p>
      </div>
      <input
        type="text"
        className="border border-gray-400 p-2 mt-10 shadow-md rounded-md w-[350px]"
        placeholder="Enter player's name"
      />
    </div>
  );
};

export default PremierLeaguePage;
