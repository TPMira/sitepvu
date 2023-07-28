import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <div className='sticky top-0 z-50 bg-gray-900 h-16 px-64 border-gray-200 border-b'>
      <nav className='container h-14 py-2 flex items-center justify-between gap-8'>
        <Link href='/'>
          <Image
            src='/corvopvu.png'
            alt='Corvo Pvu'
            className=''
            width={50}
            height={50}
            priority
          />
        </Link>
        <Link
          href='/farm'
          className='group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          Farm
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
