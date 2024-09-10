import { Investment } from '@/schema/Investment';

export const createInvestment = (
  realm: Realm,
  _id: string,
  isaId?: string,
  fundId?: string,
  userId?: string
) => {
  realm.write(() => {
    return new Investment(realm, _id, isaId || '', fundId || '', userId || '');
  });
};

export const deleteInvestment = (realm: Realm, investment: Investment) => {
  realm.write(() => {
    realm.delete(investment);
  });
};
