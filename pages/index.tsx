import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Index: React.FC = () => {
  return (
    <div>
      <div className='sticky top-0 z-50 bg-gray-900 h-16 px-64 border-gray-200 border-b'>
        <nav className='container h-14 py-2  flex items-center justify-between gap-8'>
          <Image
            src='/corvopvu.png'
            alt='Corvo Pvu'
            className=''
            width={50}
            height={50}
            priority
          />
          <Link
            href='/farm'
            className='group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          >
            Farm
          </Link>
          <div>Opção 2</div>
        </nav>
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to BOT PVU</h1>
        <p className="text-xl text-white">This is the main page of your PVU Bot application.</p>
        <p className="text-xl text-white mt-2">You can start by navigating to the Farm page using the navigation bar above.</p>
        <p className="text-xl text-white mt-2">From there, you can view and manage your farming spots.</p>
      </div>
    </div>
  );
};

export default Index;
