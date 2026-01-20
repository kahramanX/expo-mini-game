import { Stack } from "expo-router";
import "../global.css";
import { GameProvider } from "../contexts/GameContext";

export default function Layout() {
  return (
    <GameProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GameProvider>
  );
}
