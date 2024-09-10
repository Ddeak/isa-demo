import { User } from '@/schema/User';

export const createUser = (realm: Realm, _id: string, name: string) => {
  realm.write(() => {
    return new User(realm, _id, name);
  });
};

export const deleteUser = (realm: Realm, fund: User) => {
  realm.write(() => {
    realm.delete(fund);
  });
};
