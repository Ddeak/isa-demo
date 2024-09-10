import Colours from '@/constants/Colours';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

type ErrorListProps = {
  errors: string[];
};

const ErrorList = ({ errors }: ErrorListProps) => {
  if (!errors.length) return null;

  return (
    <View style={styles.container}>
      {errors.map((error) => (
        <Text style={styles.text} variant='bodyMedium'>
          {error}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: Colours.Error,
  },
});

export default ErrorList;
