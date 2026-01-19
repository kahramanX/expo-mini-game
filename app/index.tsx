import { View, TextInput } from 'react-native'
import { router } from 'expo-router'
import PrimaryButton from '../components/PrimaryButton';

export default function Page() {
  function confirmHandler() {
    router.push('/game');
  }

  function resetHandler() {
    // Reset işlemi - şimdilik boş
  }

  return (
    <View className='flex-1 bg-purple-800 justify-center items-center px-4'>
      <TextInput 
        className='w-full text-center py-3 text-4xl font-bold color-yellow-500 bg-white '
        placeholder='Enter a number'
        keyboardType='number-pad'
        maxLength={2}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View className='flex-row gap-4'>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}
