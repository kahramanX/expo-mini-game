import { View, Text, Alert } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../components/PrimaryButton";
import { useGame } from "../contexts/GameContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function Page() {
  const { enteredNumber } = useGame();
  const targetNumber = Number(enteredNumber);
  const [minBoundary, setMinBoundary] = useState<number>(1);
  const [maxBoundary, setMaxBoundary] = useState<number>(100);
  const initialGuess = generateRandomBetween(1, 100, targetNumber);
  const [opponentNumber, setOpponentNumber] = useState<number>(initialGuess);

  // Reset boundaries when component mounts
  useEffect(() => {
    setMinBoundary(1);
    setMaxBoundary(100);
  }, []);

  // Check if game is won
  useEffect(() => {
    if (opponentNumber === targetNumber) {
      Alert.alert("You Won! 🎉", `Correct! The number was ${targetNumber}`, [
        {
          text: "Play Again",
          onPress: () => router.replace("/"),
        },
      ]);
    }
  }, [opponentNumber, targetNumber]);

  function nextGuessHandler(direction: "lower" | "greater") {
    // Check if user is lying
    if (
      (direction === "lower" && opponentNumber < targetNumber) ||
      (direction === "greater" && opponentNumber > targetNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    let newMinBoundary = minBoundary;
    let newMaxBoundary = maxBoundary;

    if (direction === "lower") {
      newMaxBoundary = opponentNumber;
    } else {
      newMinBoundary = opponentNumber + 1;
    }

    const newRndNumber = generateRandomBetween(
      newMinBoundary,
      newMaxBoundary,
      opponentNumber,
    );

    setMinBoundary(newMinBoundary);
    setMaxBoundary(newMaxBoundary);
    setOpponentNumber(newRndNumber);
  }

  function incrementHandler() {
    nextGuessHandler("greater");
  }

  function decrementHandler() {
    nextGuessHandler("lower");
  }

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
        <View className="border p-5 mx-8 rounded-md">
          <Text className="text-blue-100 text-3xl font-bold text-center">
            Opponent's Guess: {targetNumber}
          </Text>
        </View>
        <View className="border-2 mt-10 rounded-md mx-8 shadow-lg">
          <Text className="text-white text-6xl font-bold text-center py-10">
            {opponentNumber}
          </Text>
        </View>
        <View className="flex-1 justify-center items-center px-4">
          <View className="w-full flex-row gap-2 max-w-md justify-center items-center px-4 py-4 rounded-lg bg-blue-900/50 border-2 shadow-2xl">
            <View className="flex-1">
              <PrimaryButton
                variant="blue"
                textClassName="text-white text-center text-5xl"
                onPress={incrementHandler}
              >
                +
              </PrimaryButton>
            </View>
            <View className="flex-1">
              <PrimaryButton
                variant="blue"
                textClassName="text-white text-center text-5xl"
                onPress={decrementHandler}
              >
                -
              </PrimaryButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
