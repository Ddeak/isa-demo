import { IconButton } from 'react-native-paper';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

const AddButton = () => (
  <Link href='/investments/new' asChild>
    <IconButton
      icon='plus'
      size={50}
      onPress={() => console.log('Pressed')}
      mode='contained'
      style={styles.button}
    />
  </Link>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});

export default AddButton;
