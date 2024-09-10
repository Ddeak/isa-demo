import InvestmentList from '@/components/Investment/InvestmentList';
import Colours from '@/constants/Colours';
import { StyleSheet, View } from 'react-native';

const NewInvestmentScreen = () => (
  <View style={styles.container}>
    <InvestmentList />
  </View>
);

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
