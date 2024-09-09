import ISASelector from '@/components/ISA/ISASelector';
import { TestISAs } from '@/testData';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NewInvestmentScreen = () => {
  const params = useLocalSearchParams();
  const [selectedISA, setSelectedISA] = useState(
    TestISAs.find((isa) => isa.id === params.isaID)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a new investment {params.isaID}</Text>
      <ISASelector
        selectedISA={selectedISA}
        onSelect={(isa) => setSelectedISA(isa)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  text: {
    color: '#fff',
  },
});

export default NewInvestmentScreen;
