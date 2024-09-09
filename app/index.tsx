import AddButton from '@/components/AddButton';
import ISAList from '@/components/ISA/ISAList';
import Colours from '@/constants/Colours';
import { TestISAs } from '@/testData';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text variant='displayLarge' style={styles.header}>
        ISA-Demo
      </Text>
      <Icon size={50} source='finance' color={Colours.PrimaryPurple} />
    </View>

    <ISAList data={TestISAs} />

    <AddButton />
  </View>
);

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
    color: '#fff',
  },
});

export default HomeScreen;
