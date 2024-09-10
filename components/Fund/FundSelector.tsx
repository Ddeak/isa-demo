import Colours from '@/constants/Colours';
import { intToCurrency } from '@/helpers/format';
import { Fund as FundModel } from '@/schema/Fund';
import { Fund } from '@/types';
import { useQuery } from '@realm/react';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Icon, Text } from 'react-native-paper';

type FundSelectorProps = {
  selectedFund?: Fund;
  onSelect: (fund?: Fund) => void;
};

const FundSelector = ({ selectedFund, onSelect }: FundSelectorProps) => {
  const funds = useQuery(FundModel);

  if (!selectedFund) {
    return (
      <>
        <Text style={styles.header} variant='bodyLarge'>
          Select an Fund
        </Text>
        <FlatList
          style={styles.list}
          data={funds}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              key={item._id}
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
    marginRight: 10,
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
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
});

export default FundSelector;
