import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ButtonCustom() {
  const [waveOffsets, setWaveOffsets] = useState([0, 0, 0, 0]);

  const updateWaveOffsets = () => {
    setWaveOffsets((prevOffsets) =>
      prevOffsets.map((offset) => (offset + 1) % 100)
    );
  };

  return (
    <motion.button
      type='submit'
      className='bg-yellow-300 text-black text-lg px-4 py-1 mt-2 border-2 border-gray-900  font-semibold relative overflow-hidden'
      style={{
        backgroundColor: '#FFD700',
      }}
      whileHover={{
        backgroundColor: '#111827',
        color: '#FFD700',
      }}
      onMouseEnter={updateWaveOffsets}
    >
      <motion.div
        className="wave-border"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
        onAnimationComplete={updateWaveOffsets}
        style={{
          background: `linear-gradient(to right, transparent, yellow, transparent)`,
          width: '100%',
          height: '2px',
          position: 'absolute',
          top: 0,
          left: `${waveOffsets[0]}%`,
        }}
      ></motion.div>
      <motion.div
        className="wave-border"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
        onAnimationComplete={updateWaveOffsets}
        style={{
          background: `linear-gradient(to bottom, transparent, yellow, transparent)`,
          width: '2px',
          height: '100%',
          position: 'absolute',
          top: `${waveOffsets[3]}%`,
          left: 0,
        }}
      ></motion.div>
      <motion.div
        className="wave-border"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
        onAnimationComplete={updateWaveOffsets}
        style={{
          background: `linear-gradient(to right, transparent, yellow, transparent)`,
          width: '100%',
          height: '2px',
          position: 'absolute',
          bottom: 0,
          left: `${waveOffsets[2]}%`,
        }}
      ></motion.div>
      <motion.div
        className="wave-border"
        initial={{ y: '100%' }} 
        animate={{ y: '-100%' }} 
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
        onAnimationComplete={updateWaveOffsets}
        style={{
          background: `linear-gradient(to bottom, transparent, yellow, transparent)`, 
          width: '2px',
          height: '100%',
          position: 'absolute',
          top: `${waveOffsets[1]}%`,
          right: 0,
        }}
      ></motion.div>
      Submit
    </motion.button>
  );
}

export default ButtonCustom;
