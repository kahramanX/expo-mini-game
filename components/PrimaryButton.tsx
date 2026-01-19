import { Text, Pressable } from "react-native";
import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-purple-500 rounded-lg px-6 py-3 w-full active:bg-purple-600 shadow-lg"
    >
      <Text className="text-center text-lg font-bold text-purple-50">
        {children}
      </Text>
    </Pressable>
  );
}

export default PrimaryButton;
