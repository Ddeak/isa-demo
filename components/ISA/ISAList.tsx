import { ISA } from '@/schema/ISA';
import Colours from '@/constants/Colours';
import { Routes } from '@/constants/routes';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { Results } from 'realm';

type ISAListProps = {
  data: Results<ISA>;
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
        <View style={styles.item} key={item._id}>
          <View style={styles.row}>
            <Text style={styles.text} variant='titleLarge'>
              {item.name}
            </Text>
            <Link
              href={{
                pathname: `/${Routes.NEW_INVESTMENT}`,
                params: { isaID: item._id },
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
    flexGrow: 0,
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
