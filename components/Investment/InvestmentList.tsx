import Colours from '@/constants/Colours';
import { intToCurrency } from '@/helpers/format';
import { useLinkedInvestments } from '@/helpers/hooks';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const formatDate = (date: Date) =>
  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

const InvestmentList = () => {
  const investments = useLinkedInvestments();

  if (!investments.length)
    return (
      <Text style={styles.text} variant='titleMedium'>
        No investments have been recorded yet.
      </Text>
    );

  return (
    <FlatList
      style={styles.list}
      data={investments}
      renderItem={({ item, index }) => (
        <View style={styles.item} key={index}>
          <View style={styles.row}>
            <Text style={styles.text} variant='titleSmall'>
              {item.user} invested {intToCurrency(item.amount)} into {item.isa}{' '}
              in the {item.fund} on {formatDate(item.date)}
            </Text>
          </View>

          <Divider />
        </View>
      )}
    />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default InvestmentList;
