import Colours from '@/constants/Colours';
import { Investment } from '@/schema/Investment';
import { useQuery } from '@realm/react';
import { StyleSheet, View, Text } from 'react-native';

const NewInvestmentScreen = () => {
  const investments = useQuery(Investment);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World {investments.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  text: {
    color: Colours.White,
  },
});

export default NewInvestmentScreen;
