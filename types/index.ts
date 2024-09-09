export type ISA = {
  id: string;
  name: string;
  total: number;
};

export type Investment = {
  userId: string;
  isaId: string;
  fundId: string;
};

export type User = {
  id: string;
  name: string;
};

export type Fund = {
  id: string;
  amount: number;
};
