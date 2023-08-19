import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Motion({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
        { isLoading && (
            <motion.div 
            className="flex flex-col items-center justify-center h-screen"
            exit={{ scale: 0}}
            transition={{
                duration: 0.45,
                ease: 'easeInOut'
            }}
        >
        <motion.svg
            width="200"
            height="200"
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
            transition={{ duration: 1.9, ease: 'easeInOut' }}
            />
            </motion.svg>

            <motion.h1
                className='text-yellow-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
            >
                COLD 7
            </motion.h1>
            
        </motion.div>
        )}
        
    </AnimatePresence>
  );
}

export default Motion;
