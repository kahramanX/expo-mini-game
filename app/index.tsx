import { View, TextInput, Text } from "react-native";
import { router } from "expo-router";
import PrimaryButton from "../components/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  function confirmHandler() {
    // router.push("/game");
  }

  function resetHandler() {
    // Reset işlemi - şimdilik boş
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
        />
        <View className="flex-row w-full gap-2">
          <View className="flex-1">
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
