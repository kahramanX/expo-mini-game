import { View, Text } from 'react-native'
import { router } from 'expo-router'
import PrimaryButton from '../components/PrimaryButton';

export default function Page() {
  function startNewGameHandler() {
    router.replace('/');
  }

  return (
    <View className='flex-1 bg-red-500 justify-center items-center px-4'>
      <Text className='text-white text-2xl font-bold mb-4'>Game Over!</Text>
      <PrimaryButton onPress={startNewGameHandler}>Start New Game</PrimaryButton>
    </View>
  )
}
