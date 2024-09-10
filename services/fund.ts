import { Fund } from '@/schema/Fund';

export const createFund = (realm: Realm, _id: string, amount: number) => {
  realm.write(() => {
    return new Fund(realm, _id, amount);
  });
};

export const deleteFund = (realm: Realm, fund: Fund) => {
  realm.write(() => {
    realm.delete(fund);
  });
};
