import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center mt-auto" style={{ marginTop: '20vh' }}>
      <h1 className="text-4xl font-bold mb-4">Guess the player</h1>
      <p className="text-lg mb-4">Guess the football player</p>
      <Link href="/premier-league">
        <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Premier League
        </p>
      </Link>
    </div>
  );
};

export default HomePage;
