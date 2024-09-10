import { Fund, ISA, User } from '@/types';

type InvestValidationProps = {
  isa?: ISA;
  fund?: Fund;
  user?: User;
};

export const investValidation = ({
  isa,
  fund,
  user,
}: InvestValidationProps) => {
  const validations: string[] = [];

  if (!isa) validations.push('Please select an ISA.');
  if (!fund) validations.push('Please select a Fund.');
  if (!user) validations.push('Please select a User.');

  return validations;
};
