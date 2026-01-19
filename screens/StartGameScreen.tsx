import { StyleSheet, View, TextInput, Button } from 'react-native';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <Button title="Confirm" onPress={() => {}} />
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
