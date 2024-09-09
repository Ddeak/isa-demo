import Colours from '@/constants/Colours';
import { Routes } from '@/constants/routes';
import { ISA } from '@/types';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

type ISAListProps = {
  data: ISA[];
};

const ISAList = ({ data }: ISAListProps) => (
  <>
    <Text style={styles.header} variant='headlineLarge'>
      Current ISAs
    </Text>
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item} key={item.id}>
          <View style={styles.row}>
            <Text style={styles.text} variant='titleLarge'>
              {item.name}
            </Text>
            <Link
              href={{
                pathname: `/${Routes.NEW_INVESTMENT}`,
                params: { isaID: item.id },
              }}
              asChild
            >
              <Button mode='text'>
                <Text style={styles.buttonText} variant='bodyLarge'>
                  Invest
                </Text>
              </Button>
            </Link>
          </View>

          <Divider />
        </View>
      )}
    />
  </>
);

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: Colours.White,
  },
  buttonText: {
    color: Colours.PrimaryPurple,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    color: Colours.White,
    marginVertical: 20,
  },
});

export default ISAList;
