import Colours from '@/constants/Colours';
import { TestFunds } from '@/testData';
import { Fund } from '@/types';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Icon, Text } from 'react-native-paper';

type FundSelectorProps = {
  selectedFund?: Fund;
  onSelect: (fund?: Fund) => void;
};

const intToCurrency = (number: number) =>
  '£' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const FundSelector = ({ selectedFund, onSelect }: FundSelectorProps) => {
  if (!selectedFund) {
    return (
      <>
        <Text style={styles.header} variant='bodyLarge'>
          Select an Fund
        </Text>
        <FlatList
          style={styles.list}
          data={TestFunds}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => onSelect(item)}
            >
              <View style={styles.row}>
                <Text style={styles.text} variant='titleLarge'>
                  {intToCurrency(item.amount)}
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
        Fund:
      </Text>
      <View style={styles.row}>
        <View style={styles.selectedText}>
          <Text style={styles.text} variant='titleLarge'>
            {intToCurrency(selectedFund.amount)}
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
    marginBottom: 5,
  },
  header: {
    color: Colours.White,
    marginVertical: 15,
  },
  selectedText: {
    flexDirection: 'row',
    width: '40%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
});

export default FundSelector;
