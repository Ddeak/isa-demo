import { ISA } from '@/schema/ISA';
import { useRealm } from '@realm/react';
import { useEffect } from 'react';
import { Results } from 'realm';

export const useInitialData = (ISAs: Results<ISA>) => {
  const realm = useRealm();

  useEffect(() => {
    const createInitialData = () => {
      realm.write(() => {
        return new ISA(realm, 'cushon-isa-1', 'Cushon ISA 1');
      });
    };

    if (ISAs.length === 0) {
      createInitialData();
    }
  }, [ISAs]);
};
