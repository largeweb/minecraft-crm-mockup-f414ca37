// app/components/InteractionLog.tsx
"use client";

import React, { useState } from "react";

interface Interaction {
  id: string;
  timestamp: string;
  type: string;
  description: string;
}

interface Props {
  interactions: Interaction[];
}

const InteractionLog: React.FC<Props> = ({ interactions }) => {
  // Placeholder state (not functional in this mockup)
  const [interactionLog, setInteractionLog] = useState<Interaction[]>(interactions);

  // Mock function for adding interactions (not functional)
  const addInteraction = (newInteraction: Interaction) => {
    // In a real app, you'd send this to the backend
    // setInteractionLog([...interactionLog, newInteraction]);
    console.log("Adding interaction:", newInteraction);
  };

  // Mock function for editing interactions (not functional)
  const editInteraction = (updatedInteraction: Interaction) => {
    // In a real app, you'd send this to the backend
    // setInteractionLog(interactionLog.map(interaction =>
    //   interaction.id === updatedInteraction.id ? updatedInteraction : interaction
    // ));
    console.log("Editing interaction:", updatedInteraction);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Interaction Log</h3>
      {interactionLog.length === 0 ? (
        <p className="text-gray-600">No interactions recorded.</p>
      ) : (
        <ul className="space-y-2">
          {interactionLog.map((interaction) => (
            <li
              key={interaction.id}
              className="border-b border-gray-200 py-2 last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800 font-medium">{interaction.type}</p>
                  <p className="text-gray-600 text-sm">{interaction.description}</p>
                </div>
                <div className="text-gray-500 text-sm">
                  {new Date(interaction.timestamp).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

return InteractionLog;