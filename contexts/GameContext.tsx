import React, { createContext, useContext, useState, ReactNode } from "react";

type GameContextType = {
  enteredNumber: string;
  setEnteredNumber: (value: string) => void;
  resetNumber: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  function resetNumber() {
    setEnteredNumber("");
  }

  return (
    <GameContext.Provider
      value={{ enteredNumber, setEnteredNumber, resetNumber }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
