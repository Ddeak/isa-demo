import AddButton from '@/components/AddButton';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ISA-Demo</Text>
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
