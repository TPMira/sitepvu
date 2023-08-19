import React from 'react';
import Card from './Card';

interface SpotInfo {
  local: string;
  time: string; // Altere o tipo para apenas 'string'
  status: boolean;
  url: string;
}

interface CardInfoProps {
  coordenada: { x: number; y: number };
  spotsInfoUpdated: SpotInfo[];
}

const CardInfo: React.FC<CardInfoProps> = ({ coordenada, spotsInfoUpdated }) => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-2xl font-bold text-yellow-300'>
        Coordenadas X,Y : {coordenada.x},  {coordenada.y}
      </h1>
      <div className='flex justify-center items-center h-[80vh]'>
        <div className='grid grid-cols-7 gap-4'>
          {spotsInfoUpdated.map((spotInfo, index) => (
            <Card key={index} spotInfo={spotInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
