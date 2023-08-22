import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import { PiPlantDuotone } from 'react-icons/pi';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Index: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoader = () => {
    setIsLoading(false)
    setTimeout(() =>  setShowContent(true), 450)
  }

  return (
    <div>
      
      { 
        showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          >
            <NavBar/>
            
      
            <motion.div 
              className="flex flex-col justify-center items-center h-[97.5vh] bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900"
              
            >
              <motion.h1 className="text-4xl font-bold text-yellow-300 mb-8">Welcome to BOT PVU</motion.h1>
              <motion.p className="text-xl text-yellow-300">This is the main page of your PVU Bot application.</motion.p>
              <motion.p className="text-xl text-yellow-300 mt-2">You can start by navigating to the Farm page using the icon :</motion.p>
              <Link href='/farm' className='text-yellow-300'>
                <motion.div whileHover={{ scale: 1.2 }}> <PiPlantDuotone   size={32} /> </motion.div>
              </Link>
              <motion.p className="text-xl text-yellow-300 mt-2">From there, you can view and manage your farming spots.</motion.p>
            </motion.div>
      
            <Footer/>
          </motion.div>
        )
      }
      <Motion isLoading={isLoading} setIsLoading={handleLoader}/>

    </div>
  );
};

export default Index;
