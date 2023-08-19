import React, { useState} from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { PiPlantDuotone } from 'react-icons/pi';

const NavBar: React.FC = () => {

  const [waveOffset, setWaveOffset] = useState(0);

  const updateWaveOffset = () => {
    setWaveOffset((prevOffset) => (prevOffset + 1) % 100);
  };
  
  return (
    <motion.div className='fixed top-0 left-0 right-0 bg-gray-900 py-2 border-b border-yellow-200'>
      <motion.div
        className="wave-border"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
        onAnimationComplete={updateWaveOffset}
        style={{
          background: `linear-gradient(to right, transparent, yellow, transparent)`,
          width: '100%',
          height: '3px',
          position: 'absolute',
          bottom: 0,
          left: `${waveOffset}%`,
        }}
      ></motion.div>
      <div className='flex justify-between px-8'>
        <div className='flex items-center gap-1'>
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
            >
            <defs>
            <pattern
                id="image-pattern"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
            >
                <image
                href="https://prod-image-cdn.tensor.trade/images/slug=016dc516-086b-47f7-a84c-57e5e0da6a82/400x400/freeze=false/https://nftstorage.link/ipfs/bafybeidaa2yyvigakblaxhcq4t5vfp7y5tydyhzgglfe723wk7y3b33pdq/168"
                x="0"
                y="0"
                width="100"
                height="100"
                />

            </pattern>
            </defs>

            <motion.polygon
            points="50,5 95,30 80,85 20,85 5,30"
            fill="url(#image-pattern)"
            stroke="yellow"
            strokeWidth="2"
            initial={{ strokeDasharray: '0 100' }}
            animate={{ strokeDasharray: '100 0' }}
            exit={{ strokeDasharray: '0 100' }}
            transition={{ duration: 1.9, ease: 'easeInOut', repeat: Infinity,  }}
            />
          </motion.svg>
          <Link
            href='/'
          >
            <motion.h1
                  className='text-yellow-300'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.9, ease: 'easeInOut' }}
                  whileHover={{ borderBottom: '2px solid yellow' }}
              >
                  COLD 7
              </motion.h1>
          </Link>
        </div>

        <ul className='flex items-center gap-3'>
          <Link
            href='/test'
          >
            <motion.h1
              className='text-yellow-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.9, ease: 'easeInOut' }}
              whileHover={{ borderBottom: '2px solid yellow' }}
            >
              <AiFillGithub size={24} />
            </motion.h1>
          </Link>

          <Link
            href='/test'
            >
            <motion.h1
              className='text-yellow-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.9, ease: 'easeInOut' }}
              whileHover={{ borderBottom: '2px solid yellow' }}
              >
              <AiFillTwitterCircle size={24} />
            </motion.h1>
          </Link>

          <Link
            href='/test'
            >
            <motion.h1
              className='text-yellow-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.9, ease: 'easeInOut' }}
              whileHover={{ borderBottom: '2px solid yellow' }}
              >
              <AiFillYoutube size={24} />
            </motion.h1>
          </Link>

          <Link
            href='/test'
            >
            <motion.h1
              className='text-yellow-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.9, ease: 'easeInOut' }}
              whileHover={{ borderBottom: '2px solid yellow' }}
              >
              <AiFillInstagram size={24} />
            </motion.h1>
          </Link>

          <Link
            href='/farm'
            >
            <motion.h1
              className='text-yellow-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.9, ease: 'easeInOut' }}
              whileHover={{ borderBottom: '2px solid yellow' }}
              >
              <PiPlantDuotone   size={24} />
            </motion.h1>
          </Link>
        </ul>
      </div>
      
    </motion.div>
  );
}

export default NavBar;
