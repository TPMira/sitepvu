import React,{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const Footer: React.FC = () => {

  const [waveOffset, setWaveOffset] = useState(0);

  const updateWaveOffset = () => {
    setWaveOffset((prevOffset) => (prevOffset + 1) % 100);
  };

  return (
    <motion.div className='fixed bottom-0 left-0 right-0 bg-gray-900 py-1 px-8 border-t border-yellow-200 flex justify-between items-center'>

        <ul className='flex items-center gap-3'>
            <Link
              href='/test'
            >
              <motion.h1
                className='text-yellow-300'
                whileHover={{ scale: 1.15 }}
              >
                <AiFillGithub size={24} />
              </motion.h1>
            </Link>

            <Link
              href='/test'
              >
              <motion.h1
                className='text-yellow-300'
                whileHover={{ scale: 1.15 }}
                >
                <AiFillTwitterCircle size={24} />
              </motion.h1>
            </Link>
        </ul>

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
          top: 0,
          left: `${waveOffset}%`,
        }}
      />
      <div className='text-yellow-300'>
        By Mira & Caza
      </div>

      <div>

      
        <ul className='flex items-center gap-3'>
          <Link
            href='https://cd7-videos.netlify.app/'
            >
            <motion.h1
              className='text-yellow-300'
              whileHover={{ scale: 1.15 }}
              >
              <AiFillYoutube size={24} />
            </motion.h1>
          </Link>

          <Link
            href='/test'
            >
            <motion.h1
              className='text-yellow-300'
              whileHover={{ scale: 1.15 }}
              >
              <AiFillInstagram size={24} />
            </motion.h1>
          </Link>
        </ul>

      </div>

      

    </motion.div>

  );
};

export default Footer;
