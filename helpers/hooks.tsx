import { Fund } from '@/schema/Fund';
import { Investment } from '@/schema/Investment';
import { ISA } from '@/schema/ISA';
import { User } from '@/schema/User';
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
      createFund(realm, 'fund-1', 'Cushon Equities Fund');
      createUser(realm, 'user-1', 'John Wick');
      createUser(realm, 'user-2', 'Daniel Deak');
    };

    // this is a hack, it assumes if no ISAs exist, then nothing else exists yet either.
    if (isas.length === 0) {
      createInitialData();
    }
  }, [isas]);
};

export const useLinkedInvestments = () => {
  const investments = useQuery(Investment);

  return investments.map((investment) => {
    const fund = useQuery(Fund, (coll) =>
      coll.filtered('_id == $0', investment.fundId)
    );
    const isa = useQuery(ISA, (coll) =>
      coll.filtered('_id == $0', investment.isaId)
    );
    const user = useQuery(User, (coll) =>
      coll.filtered('_id == $0', investment.userId)
    );

    return {
      user: user[0].name,
      fund: fund[0].name,
      isa: isa[0].name,
      amount: investment.amount,
      date: investment.createdAt,
    };
  });
};
