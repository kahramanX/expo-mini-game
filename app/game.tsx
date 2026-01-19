import { View, Text } from 'react-native'
import { router } from 'expo-router'
import PrimaryButton from '../components/PrimaryButton';

export default function Page() {
  function gameOverHandler() {
    router.replace('/game-over');
  }

  return (
    <View className='flex-1 bg-blue-500 justify-center items-center'>
      <Text className='text-white text-2xl font-bold mb-4 '>GameScreen</Text>
      <PrimaryButton onPress={gameOverHandler}>Game Over</PrimaryButton>
    </View>
  )
}
