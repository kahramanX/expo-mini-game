import { View, Text } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/PrimaryButton";

export default function Page() {
  function startNewGameHandler() {
    router.replace("/");
  }

  return (
    <LinearGradient
      colors={["#f87171", "#ef4444", "#dc2626"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <View className="w-full max-w-md justify-center items-center px-6 py-8 rounded-lg bg-red-900/80 border-2 border-red-400/30 shadow-2xl">
        <Text className="text-red-100 text-3xl font-bold mb-6">Game Over!</Text>
        <PrimaryButton onPress={startNewGameHandler} variant="red">
          Start New Game
        </PrimaryButton>
      </View>
    </LinearGradient>
  );
}
