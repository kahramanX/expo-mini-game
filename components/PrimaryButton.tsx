import { Text, Pressable } from "react-native";
import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "purple" | "blue" | "red";
  textClassName?: string;
};

function PrimaryButton({
  children,
  onPress,
  variant = "purple",
  textClassName,
}: PrimaryButtonProps) {
  const colorClasses = {
    purple: "bg-purple-500 active:bg-purple-600 text-purple-50",
    blue: "bg-blue-500 active:bg-blue-600 text-blue-50",
    red: "bg-red-500 active:bg-red-600 text-red-50",
  };

  return (
    <Pressable
      onPress={onPress}
      className={`${colorClasses[variant]} rounded-lg px-6 py-3 w-full shadow-lg`}
    >
      <Text className={`${textClassName ?? "text-center text-lg font-bold"}`}>
        {children}
      </Text>
    </Pressable>
  );
}

export default PrimaryButton;
