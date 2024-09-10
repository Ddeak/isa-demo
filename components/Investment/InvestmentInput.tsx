import Colours from '@/constants/Colours';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

type InvestmentInputProps = {
  onAmountChange: (value: string) => void;
  value: string;
};

const InvestmentInput = ({ onAmountChange, value }: InvestmentInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} variant='bodyLarge'>
        Enter the amount you wish to invest:
      </Text>
      <TextInput
        label='Amount To Invest'
        value={value}
        onChangeText={onAmountChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: Colours.White,
    marginBottom: 20,
  },
});

export default InvestmentInput;
