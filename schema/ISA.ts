import Realm from 'realm';

export class ISA extends Realm.Object<ISA> {
  // @ts-ignore
  _id: string;
  // @ts-ignore
  name: string;
  createdAt: Date = new Date();

  static primaryKey = '_id';

  static schema = {
    name: 'ISA',
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
