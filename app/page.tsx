// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PlayerCard from "./components/PlayerCard";
import { v4 as uuidv4 } from 'uuid'; // Ensure UUID is installed

interface Player {
  id: string;
  username: string;
  joinDate: string;
  favoriteBlock: string;
  level: number;
}

const generateMockPlayers = (): Player[] => {
  return [
    { id: uuidv4(), username: "Steve", joinDate: "2023-01-15", favoriteBlock: "Diamond Block", level: 50 },
    { id: uuidv4(), username: "Alex", joinDate: "2023-03-20", favoriteBlock: "Emerald Block", level: 42 },
    { id: uuidv4(), username: "Notch", joinDate: "2022-11-01", favoriteBlock: "Obsidian", level: 60 },
    { id: uuidv4(), username: "Grumm", joinDate: "2023-05-10", favoriteBlock: "Redstone Block", level: 35 },
  ];
};


return function Home() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // Load players from localStorage
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    } else {
      // Initialize with mock data if localStorage is empty
      const mockPlayers = generateMockPlayers();
      localStorage.setItem("players", JSON.stringify(mockPlayers));
      setPlayers(mockPlayers);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Minecraft CRM</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {players.map((player) => (
          <motion.div
            key={player.id}
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            <PlayerCard player={player} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}