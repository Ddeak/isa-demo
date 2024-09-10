import ConfirmDialog from '@/components/ConfirmDialog';
import ErrorList from '@/components/ErrorList';
import FundSelector from '@/components/Fund/FundSelector';
import ISASelector from '@/components/ISA/ISASelector';
import UserSelector from '@/components/Users/UserSelector';
import Colours from '@/constants/Colours';
import { investValidation } from '@/helpers/validation';
import { TestISAs } from '@/testData';
import { Fund, ISA, User } from '@/types';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const NewInvestmentScreen = () => {
  const params = useLocalSearchParams();
  const [selectedISA, setSelectedISA] = useState<ISA | undefined>(
    TestISAs.find((isa) => isa.id === params.isaID)
  );
  const [selectedFund, setSelectedFund] = useState<Fund | undefined>();
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [errors, setErrors] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);

  const onInvestPress = () => {
    const validationErrors = investValidation({
      isa: selectedISA,
      fund: selectedFund,
      user: selectedUser,
    });
    if (validationErrors.length) {
      setErrors(validationErrors);
      return;
    }

    setShowDialog(true);
  };

  const onConfirm = () => {
    setShowDialog(false);
  };

  return (
    <View style={styles.container}>
      <ISASelector
        selectedISA={selectedISA}
        onSelect={(isa) => {
          setErrors([]);
          setSelectedISA(isa);
        }}
      />

      <FundSelector
        selectedFund={selectedFund}
        onSelect={(fund) => {
          setErrors([]);
          setSelectedFund(fund);
        }}
      />

      <UserSelector
        selectedUser={selectedUser}
        onSelect={(user) => {
          setErrors([]);
          setSelectedUser(user);
        }}
      />

      <ErrorList errors={errors} />

      <ConfirmDialog
        showDialog={showDialog}
        onCancel={() => setShowDialog(false)}
        onConfirm={onConfirm}
        isa={selectedISA}
        fund={selectedFund}
      />

      <View style={styles.buttonView}>
        <Button
          mode='contained'
          onPress={onInvestPress}
          style={styles.button}
          buttonColor={Colours.PrimaryPurple}
        >
          Invest
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  text: {
    color: Colours.White,
  },
  button: {
    width: '100%',
    paddingVertical: 5,
  },
  buttonView: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default NewInvestmentScreen;
