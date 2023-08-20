import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';

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
          <div>
            <NavBar/>
            
      
            <div className="flex flex-col justify-center items-center h-[97.5vh] bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900">
              <h1 className="text-4xl font-bold text-white mb-8">Welcome to BOT PVU</h1>
              <p className="text-xl text-white">This is the main page of your PVU Bot application.</p>
              <p className="text-xl text-white mt-2">You can start by navigating to the Farm page using the navigation bar above.</p>
              <p className="text-xl text-white mt-2">From there, you can view and manage your farming spots.</p>
            </div>
      
            <Footer/>
          </div>
        )
      }
      <Motion isLoading={isLoading} setIsLoading={handleLoader}/>

    </div>
  );
};

export default Index;
