"use client";
import Collection from '@/components/Collection/Collection';
import Sports from '@/components/Sports/Sports';
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main style={{ backgroundColor: isDarkMode ? '#292B32' : '#F7F7F8', color: isDarkMode ? '#FFFFFF' : '#000000' }}>
      <button onClick={toggleDarkMode} style={{ position: 'absolute', top: '10px', right: '10px' ,backgroundColor: '#2C9CF0' }} className='text-sm px-2 py-2 rounded'>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="max-w-screen-xl mx-1 sm:mx-2 md:mx-6 xl:mx-auto">
        <Sports isDarkMode={isDarkMode}></Sports>
        <Collection isDarkMode={isDarkMode}></Collection>
      </div>
    </main>
  );
}
