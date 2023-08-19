import React,{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {

  const [waveOffset, setWaveOffset] = useState(0);

  const updateWaveOffset = () => {
    setWaveOffset((prevOffset) => (prevOffset + 1) % 100);
  };

  return (
    <motion.div className='fixed bottom-0 left-0 right-0 bg-gray-900 py-1 border-t border-yellow-200' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
    </motion.div>

  );
};

export default Footer;
