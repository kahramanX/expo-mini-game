import { View, TextInput } from "react-native";
import { router } from "expo-router";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  function confirmHandler() {
    router.push("/game");
  }

  function resetHandler() {
    // Reset işlemi - şimdilik boş
  }

  return (
    <View className="flex-1 bg-purple-800 justify-center items-center px-4">
      <TextInput
        className="w-full bg-yellow-200 text-center py-3 rounded-lg text-lg font-bold mb-4"
        placeholder="Enter a number"
        keyboardType="number-pad"
        maxLength={2}
      />
      <View className="flex-row gap-4">
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;
