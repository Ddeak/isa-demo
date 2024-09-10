import { Fund } from '@/schema/Fund';

export const createFund = (realm: Realm, _id: string, name: string) => {
  realm.write(() => {
    return new Fund(realm, _id, name);
  });
};

export const deleteFund = (realm: Realm, fund: Fund) => {
  realm.write(() => {
    realm.delete(fund);
  });
};
