import Realm from 'realm';

export class Investment extends Realm.Object<Investment> {
  // @ts-ignore
  _id: string;
  // @ts-ignore
  isaId: string;
  // @ts-ignore
  fundId: string;
  // @ts-ignore
  userId: string;
  createdAt: Date = new Date();

  static primaryKey = '_id';

  static schema = {
    name: 'Investment',
    primaryKey: '_id',
    properties: {
      _id: 'string',
      isaId: 'string',
      fundId: 'string',
      userId: 'string',
      createdAt: {
        type: 'date',
        default: new Date(),
      },
    },
  };

  constructor(
    realm: any,
    _id: string,
    isaId: string,
    fundId: string,
    userId: string
  ) {
    super(realm, {
      _id,
      isaId,
      fundId,
      userId,
    });
  }
}
