import Colours from '@/constants/Colours';
import { Routes } from '@/constants/routes';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const InvestmentButton = () => {
  return (
    <Link href={`/${Routes.INVESTMENTS}`} asChild>
      <Button mode='text'>
        <Text style={styles.button} variant='bodyLarge'>
          View Investments
        </Text>
      </Button>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    color: Colours.PrimaryPurple,
  },
});

export default InvestmentButton;
