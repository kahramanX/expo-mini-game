import { View, TextInput, Text, Alert } from "react-native";
import { router } from "expo-router";
import PrimaryButton from "../components/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";
import { useGame } from "../contexts/GameContext";

export default function Page() {
  const { enteredNumber, setEnteredNumber, resetNumber } = useGame();

  function numberInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (chosenNumber > 99 || chosenNumber < 1 || isNaN(chosenNumber)) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
    } else {
      confirmHandler();
    }
  }

  function resetHandler() {
    resetNumber();
    console.log("Game Reset");
  }

  function confirmHandler() {
    router.push("/game");
    console.log("NumberConfirmed");
  }

  return (
    <LinearGradient
      colors={["#c4b5fd", "#8b5cf6", "#6d28d9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <View className="h-60 mt-28 w-full justify-center items-center px-4 rounded-lg bg-purple-900/80 border-2 border-purple-400/30 shadow-2xl">
        <Text className="text-center text-xl font-bold text-purple-100 mb-2">
          Type a number
        </Text>
        <TextInput
          className="w-20 text-center py-3 text-4xl font-bold text-yellow-400 bg-transparent border-b-4 border-yellow-400  mb-8 placeholder:text-yellow-400 "
          placeholder="..."
          placeholderTextColor="#c4b5fd"
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={setEnteredNumber}
        />
        <View className="flex-row w-full gap-2">
          <View className="flex-1">
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={numberInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
