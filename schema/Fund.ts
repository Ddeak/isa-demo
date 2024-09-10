import Realm from 'realm';

export class Fund extends Realm.Object<Fund> {
  // @ts-ignore
  _id: string;
  // @ts-ignore
  amount: number;
  createdAt: Date = new Date();

  static primaryKey = '_id';

  static schema = {
    name: 'Fund',
    primaryKey: '_id',
    properties: {
      _id: 'string',
      amount: 'int',
      createdAt: {
        type: 'date',
        default: new Date(),
      },
    },
  };

  constructor(realm: any, _id: string, amount: number) {
    super(realm, {
      _id,
      amount,
    });
  }
}
