import { ISA } from '@/schema/ISA';

export const createISA = (realm: Realm, _id: string, name: string) => {
  realm.write(() => {
    return new ISA(realm, _id, name);
  });
};

export const deleteISA = (realm: Realm, isa: ISA) => {
  realm.write(() => {
    realm.delete(isa);
  });
};
