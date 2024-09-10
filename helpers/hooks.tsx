import { Fund } from '@/schema/Fund';
import { ISA } from '@/schema/ISA';
import { createFund } from '@/services/fund';
import { createISA } from '@/services/isa';
import { createUser } from '@/services/user';
import { useQuery, useRealm } from '@realm/react';
import { useEffect } from 'react';

export const useInitialData = () => {
  const realm = useRealm();
  const isas = useQuery(ISA);

  useEffect(() => {
    const createInitialData = () => {
      createISA(realm, 'cushon-isa-1', 'Cushon ISA 1');
      // createFund(realm, 'fund-1', 25000);
      // createUser(realm, 'user-1', 'John Wick');
      createUser(realm, 'user-2', 'Daniel Deak');
    };

    // this is a hack, it assumes if no ISAs exist, then nothing else exists yet either.
    if (isas.length === 0) {
      createInitialData();
    }
  }, [isas]);
};
