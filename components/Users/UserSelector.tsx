import Colours from '@/constants/Colours';
import { User as UserModel } from '@/schema/User';
import { User } from '@/types';
import { useQuery } from '@realm/react';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Icon, Text } from 'react-native-paper';

type UserSelectorProps = {
  selectedUser?: User;
  onSelect: (user?: User) => void;
};

const UserSelector = ({ selectedUser, onSelect }: UserSelectorProps) => {
  const users = useQuery(UserModel);

  if (!selectedUser) {
    return (
      <>
        <Text style={styles.header} variant='bodyLarge'>
          Select a User
        </Text>
        <FlatList
          style={styles.list}
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              key={item._id}
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
        User:
      </Text>
      <View style={styles.row}>
        <View style={styles.selectedText}>
          <Text style={styles.text} variant='titleLarge'>
            {selectedUser.name}
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
    marginVertical: 20,
  },
  selectedText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default UserSelector;
