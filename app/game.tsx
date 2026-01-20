import { View, Text } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/PrimaryButton";
import { useGame } from "../contexts/GameContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { enteredNumber } = useGame();

  function gameOverHandler() {
    router.replace("/game-over");
  }

  return (
    <LinearGradient
      colors={["#60a5fa", "#3b82f6", "#2563eb"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
        <View className="flex-1 justify-center items-center px-4">
          <View className="w-full max-w-md justify-center items-center px-6 py-8 rounded-lg bg-blue-900/80 border-2 border-blue-400/30 shadow-2xl">
            <Text className="text-blue-100 text-3xl font-bold mb-6">
              GameScreen: {enteredNumber}
            </Text>
            <PrimaryButton onPress={gameOverHandler} variant="blue">
              Game Over
            </PrimaryButton>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
