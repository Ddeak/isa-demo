import Colours from '@/constants/Colours';
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
        <Text style={styles.header} variant='bodyLarge'>
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
      <Text style={styles.header} variant='bodyLarge'>
        ISA:
      </Text>
      <View style={styles.row}>
        <Text style={styles.text} variant='titleLarge'>
          {selectedISA.name}
        </Text>

        <Button onPress={() => onSelect(undefined)} mode='text'>
          <Text style={styles.buttonText} variant='bodyLarge'>
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
    width: '100%',
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

export default ISASelector;
