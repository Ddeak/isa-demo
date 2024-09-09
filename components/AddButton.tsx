import { IconButton } from 'react-native-paper';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Routes } from '@/constants/routes';

const AddButton = () => (
  <Link href={Routes.NEW_INVESTMENT} asChild>
    <IconButton icon='plus' size={50} mode='contained' style={styles.button} />
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
