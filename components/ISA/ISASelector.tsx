import Colours from '@/constants/Colours';
import { ISA as ISAModel } from '@/schema/ISA';
import { TestISAs } from '@/testData';
import { ISA } from '@/types';
import { useQuery } from '@realm/react';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Icon, Text } from 'react-native-paper';

type ISASelectorProps = {
  selectedISA?: ISA;
  onSelect: (isa?: ISA) => void;
};

const ISASelector = ({ selectedISA, onSelect }: ISASelectorProps) => {
  const isas = useQuery(ISAModel);
  if (!selectedISA) {
    return (
      <>
        <Text style={styles.header} variant='bodyLarge'>
          Select an ISA
        </Text>
        <FlatList
          style={styles.list}
          data={isas}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.touchable}
              key={item._id}
              onPress={() => onSelect(item)}
            >
              <View style={styles.item}>
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
      <View style={styles.item}>
        <View style={styles.selectedText}>
          <Text style={styles.text} variant='titleLarge'>
            {selectedISA.name}
          </Text>
          <Icon
            source='check-circle-outline'
            size={25}
            color={Colours.Success}
          />
        </View>

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
  touchable: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: Colours.White,
    marginRight: 10,
  },
  buttonText: {
    color: Colours.PrimaryPurple,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  header: {
    color: Colours.White,
    marginVertical: 20,
  },
  selectedText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default ISASelector;
