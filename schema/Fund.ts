import Realm from 'realm';

export class Fund extends Realm.Object<Fund> {
  // @ts-ignore
  _id: string;
  // @ts-ignore
  name: string;
  createdAt: Date = new Date();

  static primaryKey = '_id';

  static schema = {
    name: 'Fund',
    primaryKey: '_id',
    properties: {
      _id: 'string',
      name: 'string',
      createdAt: {
        type: 'date',
        default: new Date(),
      },
    },
  };

  constructor(realm: any, _id: string, name: string) {
    super(realm, {
      _id,
      name,
    });
  }
}
