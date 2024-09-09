import AddButton from '@/components/AddButton';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>ISA-Demo</Text>
        <Icon size={50} source='finance' color='#fff' />
      </View>

      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
