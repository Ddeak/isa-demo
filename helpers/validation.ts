import { Fund, ISA, User } from '@/types';

type InvestValidationProps = {
  amount: number;
  isa?: ISA;
  fund?: Fund;
  user?: User;
};

export const investValidation = ({
  amount,
  isa,
  fund,
  user,
}: InvestValidationProps) => {
  const validations: string[] = [];

  if (!amount || isNaN(amount))
    validations.push('Please enter a valid amount.');
  if (!isa) validations.push('Please select an ISA.');
  if (!fund) validations.push('Please select a Fund.');
  if (!user) validations.push('Please select a User.');

  return validations;
};
