import AddButton from '@/components/AddButton';
import ISAList from '@/components/ISA/ISAList';
import Colours from '@/constants/Colours';
import { useQuery } from '@realm/react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';
import { ISA } from '../schema/ISA';
import { useInitialData } from '@/helpers/hooks';

const HomeScreen = () => {
  const isas = useQuery(ISA);
  useInitialData();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text variant='displayLarge' style={styles.header}>
          ISA-Demo
        </Text>
        <Icon size={50} source='finance' color={Colours.PrimaryPurple} />
      </View>

      <ISAList data={isas} />

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
    color: '#fff',
  },
});

export default HomeScreen;
