// app/components/PlayerCard.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Player {
  id: string;
  username: string;
  joinDate: string;
  favoriteBlock: string;
  // Add other player properties as needed
}

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/player/${player.id}`);
  };

  return (
    <motion.div
      className="bg-green-200 border-2 border-green-500 rounded-md p-4 cursor-pointer"
      style={{ fontFamily: 'Minecraft, sans-serif' }} // Replace 'Minecraft' with your actual font
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
    >
      <h3 className="text-xl font-bold text-green-800 mb-2">{player.username}</h3>
      <p className="text-gray-700">Join Date: {player.joinDate}</p>
      <p className="text-gray-700">Favorite Block: {player.favoriteBlock}</p>
      {/* Add resource icons here later */}
    </motion.div>
  );
};

export default PlayerCard;