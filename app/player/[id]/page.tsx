// app/player/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PlayerCard from "@/components/PlayerCard";
import { motion } from "framer-motion";

interface Player {
  id: string;
  username: string;
  joinDate: string;
  favoriteBlock: string;
}

const PlayerPage = () => {
  const { id } = useParams(); // Get player ID from URL
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    // Function to fetch player data from localStorage
    const fetchPlayerData = () => {
      const storedPlayers = localStorage.getItem("players");
      if (storedPlayers) {
        try {
          const players: Player[] = JSON.parse(storedPlayers);
          const foundPlayer = players.find((p) => p.id === id);
          setPlayer(foundPlayer || null); // Set player or null if not found
        } catch (error) {
          console.error("Error parsing player data from localStorage:", error);
          setPlayer(null);
        }
      } else {
        // Initialize with mock data if localStorage is empty
        const mockPlayers: Player[] = [
          {
            id: "1",
            username: "Notch",
            joinDate: "2009-05-17",
            favoriteBlock: "Cobblestone",
          },
          {
            id: "2",
            username: "Dinnerbone",
            joinDate: "2011-02-28",
            favoriteBlock: "Redstone Block",
          },
        ];
        localStorage.setItem("players", JSON.stringify(mockPlayers));
        setPlayer(mockPlayers.find((p) => p.id === id) || null);
      }
    };

    fetchPlayerData(); // Call fetchPlayerData on component mount
  }, [id]);

  if (!player) {
    return <div className="p-4">Player not found.</div>;
  }

  return (
    <div className="p-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <PlayerCard player={player} />
      </motion.div>
    </div>
  );
};

return PlayerPage;