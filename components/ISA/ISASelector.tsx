import { TestISAs } from '@/testData';
import { ISA } from '@/types';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

type ISASelectorProps = {
  selectedISA?: ISA;
  onSelect: (isa?: ISA) => void;
};

const ISASelector = ({ selectedISA, onSelect }: ISASelectorProps) => {
  if (!selectedISA) {
    return (
      <>
        <Text style={styles.header} variant='headlineLarge'>
          Select an ISA
        </Text>
        <FlatList
          style={styles.list}
          data={TestISAs}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => onSelect(item)}
            >
              <View style={styles.row}>
                <Text style={styles.text} variant='titleLarge'>
                  {item.name}
                </Text>
              </View>

              <Divider />
            </TouchableOpacity>
          )}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.header} variant='headlineLarge'>
        Selected ISA
      </Text>
      <View style={styles.row}>
        <Text style={styles.text} variant='titleLarge'>
          {selectedISA.name}
        </Text>

        <Button buttonColor='#aaa' onPress={() => onSelect(undefined)}>
          <Text style={styles.text} variant='bodyLarge'>
            Change
          </Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: '#fff',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    color: '#fff',
    marginVertical: 20,
  },
});

export default ISASelector;
