import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const GameOverScreen = (props: Props) => {
  return (
    <View className='flex-1 bg-red-500 justify-center items-center'>
      <Text className='text-white text-2xl font-bold'>GameOverScreen</Text>
    </View>
  )
}

export default GameOverScreen