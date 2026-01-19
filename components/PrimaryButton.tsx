import { Text, View, Pressable } from 'react-native'
import React from 'react'

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
}

function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  return (
    <Pressable onPress={onPress} className='bg-yellow-500 px-6 py-3 rounded-lg active:opacity-80'>
      <Text className='text-center text-lg font-bold text-white'>{children}</Text>
    </Pressable>
  )
}

export default PrimaryButton