import { StyleSheet, View, Text } from 'react-native';

const NewInvestmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a new investment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default NewInvestmentScreen;
