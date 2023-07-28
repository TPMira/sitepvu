import React from 'react';

interface UserInfoProps {
  userInfo: {
    publicAddress: string;
    leAmount: number;
    numberOfLotteryTickets: number;
    numberOfSeeds: number;
    wateringTools: number;
    chaseCrowTools: number;
  };
}

const UserInfo: React.FC<UserInfoProps> = ({ userInfo }) => {
  return (
    <h2 className='text-2xl font-bold mb-4'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png" alt="metamask" className="inline-block h-12 w-12" /> {userInfo && `${userInfo.publicAddress.substring(0, 3)}...${userInfo.publicAddress.slice(-3)}`}
      <span className="ml-4 pl-4 border-l border-gray-500"><img src="https://marketplace.plantvsundead.com/web-desktop/assets/main/native/8d/8d3dcfe6-c9c4-4d5c-bd21-fc2b3e2d8180.c7a16.png" alt="LE" className="inline-block h-12 w-12" /> LE : {userInfo?.leAmount}</span>
      <span className="ml-4 pl-4 border-l border-gray-500"><img src="https://marketplace.plantvsundead.com/_nuxt/img/ticket.0f7cdd0.svg" alt="Tickets" className="inline-block h-12 w-12" /> Tickets : {userInfo?.numberOfLotteryTickets}</span>
      <span className="ml-4 pl-4 border-l border-gray-500"><img src="https://marketplace.plantvsundead.com/_nuxt/img/seed-disable.81d6702.svg" alt="Seeds" className="inline-block h-12 w-12" /> Seeds : {userInfo?.numberOfSeeds}</span>
      <span className="ml-4 pl-4 border-l border-gray-500"><img src="https://marketplace.plantvsundead.com/web-desktop/assets/main/native/d6/d6c9458e-3e20-41d0-bd42-b511d44f1fec.3df2b.png" alt="Água" className="inline-block h-12 w-12" /> Water : {userInfo?.wateringTools}</span>
      <span className="ml-4 pl-4 border-l border-gray-500"><img src="https://marketplace.plantvsundead.com/web-desktop/assets/main/native/16/1633cbb6-cdd0-47a6-b2e3-7c0945576313.ec206.png" alt="Crow" className="inline-block h-12 w-12" /> Crow : {userInfo?.chaseCrowTools}</span>
    </h2>
  );
};

export default UserInfo;
