import React from 'react';


interface SpotInfo {
  local: string;
  time: string;
  status: boolean;
  url: string;
}

interface CardProps {
  spotInfo: SpotInfo;
}

const Card: React.FC<CardProps> = ({ spotInfo }) => {
  const cardClassName = spotInfo.status
    ? 'bg-gray-900 p-5 rounded-lg shadow border border-green-700'
    : 'bg-gray-900 p-5 rounded-lg shadow border border-red-700';

  return (
    <div className={cardClassName}>
      <img src={spotInfo.url} alt={spotInfo.local} className="w-20 mx-auto mb-auto" />
      <p className='text-yellow-300'>{spotInfo.local}</p>
      <p className='text-yellow-300'>{spotInfo.time}</p>
      {/* ... Outros dados que você queira exibir no card */}
    </div>
  );
};

export default Card;
