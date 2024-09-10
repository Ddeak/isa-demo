export type ISA = {
  _id: string;
  name: string;
  createdAt: Date;
};

export type Investment = {
  _id: string;
  userId: string;
  isaId: string;
  fundId: string;
  amount: number;
  createdAt: Date;
};

export type User = {
  _id: string;
  name: string;
  createdAt: Date;
};

export type Fund = {
  _id: string;
  name: string;
  createdAt: Date;
};
